import { ReactNode, useEffect, useState, useContext } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

import { ContractsContext } from '../../App'
import { statusOptions, locationOptions } from '../../data/selectsData'
import { TextField, DateField } from '../Field'
import CrossIcon from '../icons/CrossIcon'
import Select, { SelectOption } from '../Select'

import './style.scss'

export type FormValues = {
  number: string
  status: string
  start: string
  end: string
  contractor: string
  description: string
  sum: string
  location: string
}

type AddContractFormProps = {
  defaultValues: FormValues
  onClose: () => void
  onSubmit: (data: FormValues) => void
  afterSubmit: () => void
  applyResetEffect?: boolean
  title?: string
  controls?: ReactNode
}

const BaseContractForm: React.FC<AddContractFormProps> = ({
  defaultValues,
  onClose,
  onSubmit,
  afterSubmit,
  applyResetEffect,
  title,
  controls,
}) => {
  const [statusOption, setStatusOption] = useState<SelectOption>(
    statusOptions[1]
  )
  const [locationOption, setLocationOption] = useState<SelectOption>(
    locationOptions[1]
  )

  const onStatusChanged = (option: SelectOption) => {
    setStatusOption(option)
    setValue('status', option.value)
  }

  const onLocationChanged = (option: SelectOption) => {
    setLocationOption(option)
    setValue('location', option.value)
  }

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues })

  const validateStartDate = (value: string) => {
    const end = getValues().end
    if (end) {
      const startDate = new Date(value)
      const endDate = new Date(end)
      const diff = endDate.getTime() - startDate.getTime()
      if (diff < 0) {
        return 'Дата начала позже даты окончания!'
      }
    }
    return undefined
  }

  const contracts = useContext(ContractsContext)

  const validateNumber = (value: string) => {
    const prevValue = defaultValues.number
    let restContracts = contracts
    if (applyResetEffect) {
      restContracts = contracts.filter(({ number }) => number !== prevValue)
    }
    if (restContracts.find(({ number }) => number === value)) {
      return 'Договор с таким номером уже есть!'
    }
  }

  const validateSum = (value: string) => {
    if (isNaN(Number(value.replace(',', '.')))) {
      return 'Введено не число!'
    }
    const digitsAfterComma = value.toString().includes('.')
      ? value.split('.')[1].length
      : 0
    if (digitsAfterComma >= 3) {
      return 'Не больше двух цифр после запятой!'
    }
  }

  const submit: SubmitHandler<FormValues> = (data: FormValues) => {
    onSubmit(data)
    reset()
    onClose()
  }

  const closeForm = () => {
    onClose()
    reset()
  }

  useEffect(() => {
    if (applyResetEffect) {
      const status = statusOptions.find(
        ({ value }) => value === defaultValues.status
      )
      if (status) setStatusOption(status)
      const location = locationOptions.find(
        ({ value }) => value === defaultValues.location
      )
      if (location) setLocationOption(location)
      reset({ ...defaultValues })
    }
  }, [reset, applyResetEffect, defaultValues])

  return (
    <form className='contract-form' onSubmit={handleSubmit(submit)}>
      {title ? <h2 className='contract-form__title'>{title}</h2> : null}
      <CrossIcon className='contract-form__icon' onClick={closeForm} />
      <div className='contract-form__row'>
        <div className='contract-form__column'>
          <TextField
            id='number'
            name='number'
            register={register}
            rules={{
              required: 'Обязательно!',
              validate: validateNumber,
            }}
            error={errors.number}
            label='Номер договора'
            placeholder='Введите номер'
          />
          <div className='contract-form__select-container'>
            <span>Состояние</span>
            <Select
              className='contract-form__select'
              options={statusOptions}
              selectedOption={statusOption}
              onChange={onStatusChanged}
              withoutFirstOption
            />
          </div>
        </div>
        <div className='contract-form__column'>
          <DateField
            id='start'
            name='start'
            register={register}
            rules={{
              required: 'Обязательно!',
              validate: validateStartDate,
            }}
            error={errors.start}
            label='Начало'
          />
          <DateField
            id='end'
            name='end'
            register={register}
            rules={{ required: 'Обязательно!' }}
            error={errors.end}
            label='Окончание'
          />
        </div>
      </div>
      <TextField
        id='contractor'
        name='contractor'
        register={register}
        rules={{ required: 'Обязательно!' }}
        error={errors.contractor}
        label='Контрагент'
        placeholder='Введите название компании или ИП'
      />
      <TextField
        id='description'
        name='description'
        register={register}
        rules={{ required: 'Обязательно!' }}
        error={errors.description}
        label='Предмет договора'
        placeholder='Введите краткое описание'
      />
      <div className='contract-form__row'>
        <div className='contract-form__select-container'>
          <span>Где сейчас</span>
          <Select
            className='contract-form__select'
            options={locationOptions}
            selectedOption={locationOption}
            onChange={onLocationChanged}
            withoutFirstOption
          />
        </div>
        <TextField
          id='sum'
          name='sum'
          register={register}
          rules={{
            required: 'Обязательно!',
            validate: validateSum,
          }}
          error={errors.sum}
          label='Сумма, ₽'
          placeholder='Введите сумму'
        />
      </div>
      {controls}
    </form>
  )
}

export default BaseContractForm
