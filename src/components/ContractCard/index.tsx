import classNames from 'classnames'

import { IContract } from '../../data/contractsData'

import './style.scss'

type ContractCardProps = {
  onClick?: () => void
  className?: string
} & IContract

const ContractCard: React.FC<ContractCardProps> = ({
  onClick,
  className,
  number,
  status,
  start,
  end,
  contractor,
  description,
  sum,
  location,
}) => {
  return (
    <div
      className={classNames('contract-card', className)}
      onClick={onClick}
      tabIndex={0}
    >
      <span>{number}</span>
      <span>{status}</span>
      <span>{start}</span>
      <span>{end}</span>
      <span>{contractor}</span>
      <span>{description}</span>
      <span>{sum.toFixed(2)}</span>
      <span>{location}</span>
    </div>
  )
}

export default ContractCard
