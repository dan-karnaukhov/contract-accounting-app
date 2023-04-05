import Container from '../Container'

import './style.scss'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <Container className='footer__container'>
        <span>Выполнил:&nbsp;</span> студент группы 8К02 Карнаухов Данил
      </Container>
    </footer>
  )
}

export default Footer
