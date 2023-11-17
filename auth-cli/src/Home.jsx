import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    if (loggedIn) {
      localStorage.removeItem('user')
      props.setLoggedIn(false)
    } else {
      navigate('/login')
    }
  }

  return (
    <div className='mainContainer'>
      <div className='titleContainer'>
        <div>Добро пожаловать</div>
      </div>
      <div>Главная страница</div>
      <div className='buttonContainer'>
        <input
          className='inputButton'
          type='button'
          onClick={onButtonClick}
          value={loggedIn ? 'Выйти' : 'Войти'}
        />
        {loggedIn ? (
          <div>
            Ваш электронный адрес: {''}
            {email}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
export default Home
