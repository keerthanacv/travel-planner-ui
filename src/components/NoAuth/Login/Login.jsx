import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { authActions } from '../../../store/authSlice'
import { NavLink,Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData,setLoginData] = useState({userName:'',passWord:''});
    const handleLoginChange = (event)=>
    {
        const {name,value} = event.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleLoginSubmit = (event)=>{
        event.preventDefault();
        try{
        axios.post("http://localhost:8080/login",loginData).then((response)=>
        {
            const accessToken = response.data.data;
            console.log(accessToken+" accessToken");
            dispatch(authActions.authenticateUser({accessToken}))
        })
        navigate("/auth/home");
      }
      catch(error)
      {
       console.log(error);
      }
    }
  return (
    <>
    <div>Login</div>
    <p>Login here and make your trip !!</p>
    <div>
      <form onSubmit={handleLoginSubmit}>
      <div>
            <label htmlFor='email'>UserName:</label>
            <input type='text' placeholder='Enter your username' name='userName' value={loginData.username} onChange={handleLoginChange}></input>
        </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='Enter your password'  name='passWord' value={loginData.password} onChange={handleLoginChange}></input>
        </div>
        <div>
            <button type='submit'>Login</button>
        </div>
        <p>New User ?? <NavLink to="/signup">SignUp</NavLink></p>
      </form>
    </div>
    </>
  )
}

export default Login