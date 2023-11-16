import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = props => {
	const { loggedIn, email } = props
	const navigate = useNavigate()

	const onButtonClick = () => {
		// You'll update this function later
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
				{loggedIn ? <div>Your email address is {email}</div> : <div />}
			</div>
		</div>
	)
}
export default Home
