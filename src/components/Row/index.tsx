import { ReactNode, FC } from 'react'

import classNames from 'classnames'

import Container from '../Container'

import './style.scss'

type RowProps = {
  children?: ReactNode
  className?: string
}

const Row: FC<RowProps> = ({ children, className }) => {
  return (
    <div className={classNames('row', className)}>
      <Container className='row__container'>{children}</Container>
    </div>
  )
}

export default Row
