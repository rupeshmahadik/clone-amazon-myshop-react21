import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {register} from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

const RegisterPage = (props) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmpassword, setConfirmPassword] = useState('')
	const redirect = props.location.search ? props.location.search.split('=')[1]:'/'

	const userRegister = useSelector((state)=> state.userRegister)
    const {userInfo,loading,error} = userRegister

	const dispatch = useDispatch()
	const submitHandler = (e) =>{
		e.preventDefault()
		if(password !== confirmpassword){
			alert('password and confirmpassword are not same')
		}else{
			dispatch(register(name,email,password))	
		}
		
	}

	useEffect(()=>{
		if(userInfo){
			props.history.push(redirect)
		}
	},[props.history,redirect, userInfo])
	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					Register
				</div>
				{loading && <LoadingBox></LoadingBox>}
				{error && <MessageBox variant="danger">{error}</MessageBox>}
				<div>
					<label htmlFor="email">Name: </label>
					<input 
						type="text"
						id="name"
						placeholder="Enter Name" required
						onChange={(e)=> setName(e.target.value)}						
					/>
				</div>
				<div>
					<label htmlFor="email">Email: </label>
					<input 
						type="email"
						id="email"
						placeholder="Enter Email" required
						onChange={(e)=> setEmail(e.target.value)}						
					/>
				</div>
				<div>
					<label htmlFor="password">Password: </label>
					<input 
						type="password"
						id="password"
						placeholder="Enter Password" required
						onChange={(e)=> setPassword(e.target.value)}						
					/>
				</div>
				<div>
					<label htmlFor="confirmpassword">Confirm Password: </label>
					<input 
						type="password"
						id="confirmpassword"
						placeholder="Enter Confirm Password" required
						onChange={(e)=> setConfirmPassword(e.target.value)}						
					/>
				</div>
				<div>
					<label/>
					<button className="primary" type="submit">Register</button>
				</div>

				<div>
					<label/>			
					<div>
						Already have an account ? {' '}
						<Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
					</div>
				</div>
			</form>
		</div>
	)
}

export default RegisterPage