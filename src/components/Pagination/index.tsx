import ReactPaginate from 'react-paginate'

import Container from '../Container'

import './style.scss'

export type PaginateEvent = { selected: number }

type PaginationProps = {
  forcePage: number
  pageCount: number
  onPageChange?: (selectedItem: { selected: number }) => void
}

const Pagination: React.FC<PaginationProps> = ({
  forcePage,
  pageCount,
  onPageChange,
}) => {
  const previousIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24'>
      <path d='M16.16 7.41L11.58 12L16.16 16.59L14.75 18L8.75 12L14.75 6L16.16 7.41Z' />
    </svg>
  )

  const nextIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24'>
      <path d='M7.84 7.41L12.42 12L7.84 16.59L9.25 18L15.25 12L9.25 6L7.84 7.41Z' />
    </svg>
  )

  if (pageCount <= 1) return null

  return (
    <div className='pagination'>
      <Container className='pagination__container'>
        <ReactPaginate
          className='pagination__body'
          pageCount={pageCount}
          previousLabel={previousIcon}
          nextLabel={nextIcon}
          onPageChange={onPageChange}
          forcePage={forcePage}
        />
      </Container>
    </div>
  )
}

export default Pagination
