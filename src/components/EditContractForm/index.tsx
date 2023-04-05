import { IContract } from '../../data/contractsData'
import { statusOptions, locationOptions } from '../../data/selectsData'
import BaseContractForm, { FormValues } from '../BaseContractForm'

type AddContractFormProps = {
  contract: IContract
  onSave: (contractNumber: string, newContract: IContract) => void
  onDelete: (contractNumber: string) => void
  onClose: () => void
  afterSubmit: () => void
}

const EditContractForm: React.FC<AddContractFormProps> = ({
  contract,
  onSave,
  onDelete,
  onClose,
  afterSubmit,
}) => {
  const formateDate = (date: string) => {
    return date.split('-').reverse().join('.')
  }

  const formateDateInverse = (date: string) => {
    return date.split('.').reverse().join('-')
  }

  const statusValue = statusOptions.filter(
    ({ value }) => value === contract.status
  )[0].value

  const locationValue = locationOptions.filter(
    ({ value }) => value === contract.location
  )[0].value

  const defaultValues: FormValues = {
    ...contract,
    status: statusValue,
    start: formateDateInverse(contract.start),
    end: formateDateInverse(contract.end),
    sum: String(contract.sum),
    location: locationValue,
  }

  const onSubmit = (data: FormValues) => {
    const updatedContract: IContract = {
      ...data,
      start: formateDate(data.start),
      end: formateDate(data.end),
      sum: Number(data.sum.replace(',', '.')),
    }
    onSave(contract.number, updatedContract)
  }

  const deleteContract = () => {
    onDelete(contract.number)
    afterSubmit()
  }

  const controlButtons = (
    <div className='contract-form__controls-container'>
      <button className='contract-form__button' type='submit'>
        Сохранить
      </button>
      <button
        className='contract-form__button contract-form__button_delete'
        onClick={deleteContract}
      >
        Удалить
      </button>
    </div>
  )

  return (
    <BaseContractForm
      title='Карточка договора'
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      afterSubmit={afterSubmit}
      onClose={onClose}
      controls={controlButtons}
      applyResetEffect
    />
  )
}

export default EditContractForm
