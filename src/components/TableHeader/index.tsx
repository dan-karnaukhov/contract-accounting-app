import './style.scss'

const TableHeader: React.FC = () => {
  const titles = [
    'Номер',
    'Состояние',
    'Начало',
    'Окончание',
    'Контрагент',
    'Предмет договора',
    'Сумма, ₽',
    'Где сейчас',
  ]

  return (
    <div className='table-header'>
      {titles.map((title) => (
        <span key={title}>{title}</span>
      ))}
    </div>
  )
}

export default TableHeader
