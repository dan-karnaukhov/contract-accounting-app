import { useState, createContext } from 'react'

import AddContractButton from './components/AddContractButton'
import AddContractForm from './components/AddContractForm'
import ContractTable from './components/ContractTable'
import Footer from './components/Footer'
import Header from './components/Header'
import Modal from './components/Modal'
import Row from './components/Row'
import SearchBar from './components/SearchBar'
import Select, { SelectOption } from './components/Select'
import Title from './components/Title'
import { contractArray, IContract } from './data/contractsData'
import { statusOptions, locationOptions } from './data/selectsData'

import './scss/app.scss'

export const ContractsContext = createContext(contractArray)

const App: React.FC = () => {
  const [contracts, setContracts] = useState<IContract[]>(contractArray)
  const [term, setTerm] = useState('')
  const [modalActive, setModalActive] = useState(false)

  const [statusFilter, setStatusFilter] = useState<SelectOption>(
    statusOptions[0]
  )
  const [locationFilter, setLocationFilter] = useState<SelectOption>(
    locationOptions[0]
  )

  const searchContracts = (contracts: IContract[], term: string) => {
    return contracts.filter((contract) => {
      const values = Object.values(contract).join('')
      return values.toLowerCase().includes(term.trim().toLowerCase())
    })
  }

  const filterContracts = (
    contracts: IContract[],
    statusFilter: string,
    locationFilter: string
  ) => {
    return contracts.filter(({ status, location }) => {
      return (
        (status === statusFilter || statusFilter === 'Все') &&
        (location === locationFilter || locationFilter === 'Все')
      )
    })
  }

  const addContract = (newContract: IContract) => {
    setContracts((contracts) => [newContract, ...contracts])
  }

  const updateContract = (contractNumber: string, newContract: IContract) => {
    setContracts(
      contracts.map((contract) => {
        if (contract.number === contractNumber) {
          return newContract
        }
        return contract
      })
    )
  }

  const onContractButtonClick = () => {
    setModalActive((active) => !active)
  }

  const deleteContract = (contractNumber: string) => {
    setContracts(contracts.filter(({ number }) => number !== contractNumber))
  }

  const closeModal = () => {
    setModalActive(false)
  }

  const visibleContracts = filterContracts(
    searchContracts(contracts, term),
    statusFilter.value,
    locationFilter.value
  )

  const contractsNumber = visibleContracts.length

  return (
    <div className='wrapper'>
      <Header />
      <ContractsContext.Provider value={contracts}>
        <main className='main'>
          <Row className='main__row'>
            <Title contactsCount={contractsNumber} />
            <SearchBar onSearchChange={setTerm} />
          </Row>
          <Row className='main__row'>
            <div className='main__filters'>
              <Select
                options={statusOptions}
                selectedOption={statusFilter}
                onChange={setStatusFilter}
              />
              <Select
                options={locationOptions}
                selectedOption={locationFilter}
                onChange={setLocationFilter}
              />
            </div>
            <AddContractButton onClick={onContractButtonClick} />
          </Row>
          <ContractTable
            onDeleteContract={deleteContract}
            onUpdateContract={updateContract}
            contracts={visibleContracts}
            className='main__table'
          />
        </main>
      </ContractsContext.Provider>
      <Modal active={modalActive}>
        <AddContractForm
          onAdd={addContract}
          onClose={closeModal}
          afterSubmit={closeModal}
        />
      </Modal>
      <Footer />
    </div>
  )
}

export default App
