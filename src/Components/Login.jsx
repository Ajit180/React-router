import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const handlelogin =()=>{
        localStorage.setItem("auth","true");
        navigate('/dashboard');
    }
  return (
    <div>
       <h1>Login Page</h1>
       <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login
