import { useState } from 'react'

import classNames from 'classnames'

import './style.scss'

export type SelectOption = {
  label: string
  value: string
}

export type SelectProps = {
  options: SelectOption[]
  selectedOption: SelectOption
  onChange: (option: SelectOption) => void
  withoutFirstOption?: boolean
  className?: string
}

const Select: React.FC<SelectProps> = ({
  options,
  selectedOption,
  onChange,
  withoutFirstOption,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onSelectClick = () => {
    setIsOpen((prevValue) => !prevValue)
  }

  const onSelectBlur = () => {
    setIsOpen(false)
  }

  const onOptionSelect = (option: SelectOption) => {
    if (option !== selectedOption) {
      onChange(option)
    }
  }

  const visibleOptions = withoutFirstOption
    ? options.slice(1, options.length)
    : options

  return (
    <div
      className={classNames('select', className)}
      onClick={onSelectClick}
      onBlur={onSelectBlur}
      tabIndex={0}
    >
      <span className='select__value'>{selectedOption.label}</span>
      <svg
        className={classNames('select__icon', {
          'select__icon_open': isOpen,
        })}
        viewBox='0 0 13 7'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M5.256 6.035L6.01 6.789L12.045 0.754L11.291 0L6.01 5.281L0.754 0.0249996L0 0.778999L3.013 3.792L5.256 6.035Z' />
      </svg>
      <ul
        className={classNames('select__option-list', {
          'select__option-list_open': isOpen,
        })}
      >
        {visibleOptions.map((option) => (
          <li
            key={option.value}
            className={classNames('select__option', {
              'select__option_selected': option === selectedOption,
            })}
            onClick={() => onOptionSelect(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
