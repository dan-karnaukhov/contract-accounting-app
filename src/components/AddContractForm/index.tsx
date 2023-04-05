import { IContract } from '../../data/contractsData'
import { statusOptions, locationOptions } from '../../data/selectsData'
import BaseContractForm, { FormValues } from '../BaseContractForm'

type AddContractFormProps = {
  onAdd: (contract: IContract) => void
  onClose: () => void
  afterSubmit: () => void
}

const AddContractForm: React.FC<AddContractFormProps> = ({
  onAdd,
  onClose,
  afterSubmit,
}) => {
  const defaultValues: FormValues = {
    number: '',
    status: statusOptions[1].value,
    start: '',
    end: '',
    contractor: '',
    description: '',
    sum: '',
    location: locationOptions[1].value,
  }

  const formateDate = (date: string) => {
    return date.split('-').reverse().join('.')
  }

  const onSubmit = (data: FormValues) => {
    const contract: IContract = {
      ...data,
      start: formateDate(data.start),
      end: formateDate(data.end),
      sum: Number(data.sum.replace(',', '.')),
    }
    onAdd(contract)
  }

  const submitButton = (
    <button className='contract-form__button' type='submit'>
      Добавить
    </button>
  )

  return (
    <BaseContractForm
      title='Добавление договора'
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      afterSubmit={afterSubmit}
      onClose={onClose}
      controls={submitButton}
    />
  )
}

export default AddContractForm
