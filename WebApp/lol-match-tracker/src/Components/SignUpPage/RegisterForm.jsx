import {useState} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import CircularProgress from '@mui/material/CircularProgress';

// import {sendEmail} from '../../../api/api'

import './SignUp.css'

export default function RegisterForm(){

	const [sending, setSending] = useState(false)
	const [recieved, setRecieved] = useState(false)

	const [password, setPassword] = useState('')
	const [passwordsMatch, setPasswordsMatch] = useState(true)
	const [email, setEmail] = useState('')

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleVerifyPassword = (e) => {
		if(e.target.value != password){
			console.log('setting passwordsMatch to false because ', e.target.value, ' does not equal ', password)
			setPasswordsMatch(false)
		}else{
			setPasswordsMatch(true)
		}
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const validateEmail = () => {
		if(email.length == 0){
			return false
		}

		if(!email.includes('@')){
			return true
		}

		if(!email.includes('.')){
			return true
		}

		return false
	}

	const register = async (data) => {
		await fetch('http://localhost:8080/auth/register', {
			method:'POST',
			headers: {
				'Content-Type':'application/json',
			},
			body: JSON.stringify(data)
		}).then((response) => {
			if(response.status == 409){
				console.log('username or email already exist')
			}

			if(response.status == 200){
				console.log('user registered!')
				setSending(false)
				setRecieved(true)
			}
		})
	}

	const handleSubmit = (e) => {

		e.preventDefault()

		const user_data = {
			'username': e.target.username.value,
			'password': e.target.password.value, //TODO: Handle with a useState() to ensure password and verify-password fields are the same, and then get from there
			'email': e.target.email.value,
			'first_name': e.target.first_name.value,
			'last_name': e.target.last_name.value,
			'riot_account': e.target.riot_account.value,
		}

		setSending(true)

		register(user_data)
		// sendEmail(user_data, requestRecieved)
	}

	if(sending){
		return(
			<Box sx={{ display: 'flex'}}>
      			<CircularProgress className="loading-spinner" size="8rem"/>
    		</Box>
		)
	}

	if(recieved){
		return(
			<div className="flex-column row-centered"> 
				<img src="icons/success.png" id="success-img"/>
				<p>Thanks for contacting me! It may take me a day or two to get through all of my emails, but I will make sure to reach out to you as soon as I can.</p>
			</div>
		)
	}

	return(
	<Box sx={{ minWidth: 120 }}>
		<form onSubmit={handleSubmit}>
			<FormControl className="form">
				<div className="request-input">
					<TextField className="full-width" id="request-username" name="username" label="Username" required inputProps={{maxLength: 16}}/>
				</div>
				<div className="request-input">
					<TextField className="full-width" password id="request-password" name="password" label="Password" type="password" value={password} error={(password.length > 0 && password.length <= 8) ? true : false} required onChange={handlePasswordChange}/>
				</div>
				<div className="request-input">
					<TextField className="full-width" id="request-verify-password" name="verify_password" type="password" label="Re-enter your password" error={password.length > 0 && !passwordsMatch} required onChange={handleVerifyPassword}/>
				</div>
				<div className="request-input">
					<TextField className="full-width" id="request-email" name="email" label="Email Address" required error={validateEmail()} onChange={handleEmailChange}/>
				</div>
				<div className="request-input">
					<TextField className="full-width" id="request-first-name" name="first_name" label="First Name" required />
				</div>
				<div className="request-input">
					<TextField className="full-width" id="request-last-name" name="last_name" label="Last Name" required />
				</div>
				<div className="request-input">
					<TextField className="full-width" id="request-riot-account" name="riot_account" label="Riot Account Name" required />
				</div>
				<div className="request-input" style={{width:'75%'}}>
	           		<Button className="request-input" variant="contained" type="submit">Sign Up</Button>
	          	</div>
	        </FormControl>
	    </form>
    </Box>
	)
}