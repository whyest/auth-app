import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = props => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const navigate = useNavigate()

	const onButtonClick = () => {
		// Set initial error values to empty
		setEmailError('')
		setPasswordError('')

		// Check if the user has entered both fields correctly
		if ('' === email) {
			setEmailError('Введите электронную почту')
			return
		}

		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			setEmailError('Введите действительный адрес электронной почты')
			return
		}

		if ('' === password) {
			setPasswordError('Введите пароль')
			return
		}

		if (password.length < 7) {
			setPasswordError('Пароль должен состоять из 8 символов или длиннее.')
			return
		}

		// Authentication calls will be made here...
	}

	return (
		<div className='mainContainer'>
			<div className='titleContainer'>
				<div>Войти в аккаунт</div>
			</div>
			<br />
			<div className='inputContainer'>
				<input
					value={email}
					placeholder='Введите электронный адрес'
					onChange={e => setEmail(e.target.value)}
					className='inputBox'
				/>
				<label className='errorLabel'>{emailError}</label>
			</div>
			<br />
			<div className='inputContainer'>
				<input
					value={password}
					type='password'
					placeholder='Введите пароль'
					onChange={e => setPassword(e.target.value)}
					className='inputBox'
				/>
				<label className='errorLabel'>{passwordError}</label>
			</div>
			<br />
			<div className='inputContainer'>
				<input
					className='inputButton'
					type='button'
					onClick={onButtonClick}
					value='Войти'
				/>
			</div>
		</div>
	)
}
export default Login
