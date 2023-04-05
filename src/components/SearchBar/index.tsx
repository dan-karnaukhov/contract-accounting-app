import { FC, useState, ChangeEvent } from 'react'

import MagnifierIcon from '../icons/MagnifierIcon'

import './style.scss'

type SearchBarProps = {
  onSearchChange: (term: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearchChange }) => {
  const [value, setValue] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setValue(term)
    onSearchChange(term)
  }

  return (
    <div className='search-bar'>
      <input
        className='search-bar__input'
        type='text'
        placeholder='Поиск...'
        value={value}
        onChange={onChange}
      />
      <MagnifierIcon className='search-bar__icon' />
    </div>
  )
}

export default SearchBar
