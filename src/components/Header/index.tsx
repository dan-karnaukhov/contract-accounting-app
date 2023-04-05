import Container from '../Container'

import './style.scss'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <Container className='header__container'>
        <span className='header__project-name'>Курсовой проект</span>
        <span className='header__task'>
          Разработка функционала приложения для учета договоров в организации
        </span>
        <span className='header__variant'>Вариант №19</span>
      </Container>
    </header>
  )
}

export default Header
