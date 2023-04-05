import { ReactNode, FC } from 'react'

import classNames from 'classnames'

import './style.scss'

type ContainerProps = {
  children?: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames('container', className)}>{children}</div>
}

export default Container
