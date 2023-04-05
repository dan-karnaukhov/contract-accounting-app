import { SelectOption } from '../components/Select'

export const statusOptions: SelectOption[] = [
  { label: 'Все состояния', value: 'Все' },
  { label: 'Действует', value: 'Действует' },
  { label: 'На согласовании', value: 'На согласовании' },
  { label: 'Завершён', value: 'Завершён' },
  { label: 'Расторгнут', value: 'Расторгнут' },
]

export const locationOptions: SelectOption[] = [
  { label: 'Все расположения', value: 'Все' },
  { label: 'Секретариат', value: 'Секретариат' },
  { label: 'Бухгалтерия', value: 'Бухгалтерия' },
  { label: 'Архив', value: 'Архив' },
]
