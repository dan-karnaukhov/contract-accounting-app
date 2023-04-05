export interface IContract {
  number: string
  status: string
  start: string
  end: string
  contractor: string
  description: string
  sum: number
  location: string
}

export const contractArray: IContract[] = [
  {
    number: 'АЛ2014/2 23-Б',
    status: 'На согласовании',
    start: '05.02.2014',
    end: '27.05.2014',
    contractor: 'ООО “Чистая вода”',
    description: 'Поставка питьевой воды “Чистая вода”',
    sum: 1200000,
    location: 'Секретариат',
  },
  {
    number: 'ДГ2011/1 38-А',
    status: 'Действует',
    start: '21.10.2011',
    end: '01.12.2011',
    contractor: 'ООО “Белый сахар”',
    description: 'Поставка сахара 1-й категории',
    sum: 600000,
    location: 'Бухгалтерия',
  },
  {
    number: 'ЗН2012 12-АГ',
    status: 'Действует',
    start: '10.08.2012',
    end: '11.10.2012',
    contractor: 'ООО “Свежий хлеб”',
    description: 'Поставка воды на фабрику',
    sum: 400000,
    location: 'Бухгалтерия',
  },
  {
    number: 'ДГ2011/1 40-А',
    status: 'Действует',
    start: '21.12.2022',
    end: '27.12.2022',
    contractor: 'ООО “Чистая вода”',
    description: 'Поставка питьевой воды “Чистая вода”',
    sum: 30000,
    location: 'Секретариат',
  },
  {
    number: 'ДГ2011/1 41-А',
    status: 'Действует',
    start: '21.12.2022',
    end: '27.12.2022',
    contractor: 'ООО “Чистая вода”',
    description: 'Поставка питьевой воды “Чистая вода”',
    sum: 120000,
    location: 'Секретариат',
  },
  {
    number: 'ДГ2011/1 42-А',
    status: 'Завершён',
    start: '21.12.2022',
    end: '27.12.2022',
    contractor: 'ООО “Чистая вода”',
    description: 'Поставка питьевой воды “Чистая вода”',
    sum: 555000,
    location: 'Архив',
  },
  {
    number: 'ДГ2011/1 43-А',
    status: 'Завершён',
    start: '21.12.2022',
    end: '27.12.2022',
    contractor: 'ООО “Чистая вода”',
    description: 'Поставка питьевой воды “Чистая вода”',
    sum: 70125,
    location: 'Архив',
  },
  {
    number: 'ДГ2011/1 44-А',
    status: 'Завершён',
    start: '21.12.2022',
    end: '27.12.2022',
    contractor: 'ООО “Чистая вода”',
    description: 'Поставка питьевой воды “Чистая вода”',
    sum: 400000,
    location: 'Архив',
  },
  {
    number: 'ДГ2011/1 45-А',
    status: 'Завершён',
    start: '21.12.2022',
    end: '27.12.2022',
    contractor: 'ООО “Чистая вода”',
    description: 'Поставка питьевой воды “Чистая вода”',
    sum: 400000,
    location: 'Секретариат',
  },
]
