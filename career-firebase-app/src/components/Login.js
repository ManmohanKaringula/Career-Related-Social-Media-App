import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {auth} from '../firebaseConfig'
import {login} from '../features/userSlice'

import './Login.css'

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [profilePic, setProfilePic] = useState('')
const dispatch = useDispatch()

const register = () => {
if(!name) return alert('Please enter a Full Name')
try{
auth.createUserWithEmailAndPassword(email,password)
.then(userAuth => userAuth.user.updateProfile({ displayName: name,
photoURL: profilePic })
.then(() => {
dispatch(login({ email: userAuth.user.email, uid: userAuth.user.uid,
displayName: name, photoUrl: profilePic }))
})) 
}
catch(Error){console.error("error found while authenticating")}
}

const loginToApp = (e) => {}
return (
<div className="login">
<img src="logo-career.jpeg" alt="logo"/>
<form>
<input value={name} onChange={ (e) => setName(e.target.value)} type="text" placeholder="Full name (required if registering)" />
<input value={profilePic} onChange={ (e) => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)" />
<input value={email} onChange={ (e) => setEmail(e.target.value)} type="email" placeholder="Email" />
<input value={password} onChange={ (e) => setPassword(e.target.value)} type="password" placeholder="Password" />
<button type="submit" onClick={loginToApp}>Sign In
</button>
</form>
<p>Not a member?{' '}
<span onClick={register} className="login__
register">Register Now</span>
</p>
</div>
)
}
export default Login