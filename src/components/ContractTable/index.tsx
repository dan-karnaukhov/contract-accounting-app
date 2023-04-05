import { useState, useEffect } from 'react'

import classNames from 'classnames'

import { IContract } from '../../data/contractsData'
import Container from '../Container'
import ContractCard from '../ContractCard'
import EditContractForm from '../EditContractForm'
import Modal from '../Modal'
import Pagination, { PaginateEvent } from '../Pagination'
import TableHeader from '../TableHeader'

import './style.scss'

type ContractTableProps = {
  contracts: IContract[]
  onUpdateContract: (contractNumber: string, newContract: IContract) => void
  onDeleteContract: (contractNumber: string) => void
  className?: string
}

const ContractTable: React.FC<ContractTableProps> = ({
  contracts,
  onUpdateContract,
  onDeleteContract,
  className,
}) => {
  const [contract, setContract] = useState<IContract>(contracts[0])
  const [modalActive, setModalActive] = useState(false)

  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    setOffset(0)
    setPage(0)
  }, [contracts])

  const closeModal = () => {
    setModalActive(false)
  }

  const onContractClick = (contractNumber: string) => {
    const contract = contracts.find(({ number }) => number === contractNumber)
    if (contract) {
      setContract(contract)
      setModalActive(true)
    }
  }

  const contractsPerPage = 7
  const pageCount = Math.ceil(contracts.length / contractsPerPage)
  const paginatedContracts = contracts.slice(offset, offset + contractsPerPage)

  const onPaginate = (event: PaginateEvent) => {
    setOffset(event.selected * contractsPerPage)
    if (event.selected > page) {
      setPage((page) => page + 1)
    } else {
      setPage((page) => page - 1)
    }
  }

  return (
    <div className={classNames('contract-table', className)}>
      <Container>
        <TableHeader />
        {paginatedContracts.length === 0 ? (
          <div className='contract-table__empty'>Договоров не найдено</div>
        ) : null}
        {paginatedContracts.map((contract) => (
          <ContractCard
            key={contract.number}
            className='contract-table__contract-card'
            {...contract}
            onClick={() => onContractClick(contract.number)}
          />
        ))}
      </Container>
      <Pagination
        forcePage={page}
        onPageChange={onPaginate}
        pageCount={pageCount}
      />
      <Modal active={modalActive}>
        <EditContractForm
          onDelete={onDeleteContract}
          contract={contract}
          onSave={onUpdateContract}
          onClose={closeModal}
          afterSubmit={closeModal}
        />
      </Modal>
    </div>
  )
}

export default ContractTable
