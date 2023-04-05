import classNames from 'classnames'

import './style.scss'

type ModalProps = {
  children: React.ReactNode
  active: boolean
}

const Modal: React.FC<ModalProps> = ({ children, active }) => {
  return (
    <div
      className={classNames('modal', { 'modal_active': active })}
    >
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
