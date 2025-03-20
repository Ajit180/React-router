import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../Hooks/Context/useAuth';


const Login = () => {

    const navigate = useNavigate();
    const handlelogin =()=>{
        navigate('/dashboard');
    }
  return (
    <div>
       <h1>Login Page</h1>
       <button variant="outline" onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login
