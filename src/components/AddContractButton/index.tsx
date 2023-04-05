import { FC, HTMLAttributes } from 'react'

import PlusIcon from '../icons/PlusIcon'

import './style.scss'

type AddContractButtonProps = HTMLAttributes<HTMLButtonElement>

const AddContractButton: FC<AddContractButtonProps> = (props) => {
  return (
    <button className='add-contract-button' type='button' {...props}>
      Добавить договор
      <PlusIcon className='add-contract-button__icon' />
    </button>
  )
}

export default AddContractButton
