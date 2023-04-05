import './style.scss'

type TitleProps = {
  contactsCount: number
}

const Title: React.FC<TitleProps> = ({ contactsCount }) => {
  return (
    <div className='title'>
      <h1 className='title__heading'>Договоры</h1>
      <span className='title__contracts-number'>({contactsCount})</span>
    </div>
  )
}

export default Title
