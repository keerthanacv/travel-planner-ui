import React, { useState,useEffect } from 'react'
import { DropDown } from '../DropDown/DropDown'
import axios from 'axios'
import { NavLink } from 'react-router-dom';


export const SignUp = () => {
    const [formData,setFormData] = useState({email:'',password:'',confirmPassword:'',roleId:''});
    const [roleId,setRoleId] = useState("");
    useEffect(() => {
        console.log("in use effeft "+roleId)
        setFormData((prev) => ({
            ...prev,
            roleId: roleId
    }));
    }
, [roleId]); // to set role and form data when role is selected
    const handleInputChange = (event)=>
    {
        const {name,value} = event.target;
        setFormData((prevFormData)=>({
            ...prevFormData,
            [name] : value
        }));
    }

    const handleSubmit = (event) =>
        {
            event.preventDefault();
            console.log("RoleId ",formData.roleId);
           axios.post("http://localhost:8080/create-user",formData)

        }
  return (
    <>
<h1>Sign Up</h1>  
<span>Sign up to create an account and start planning your travels!</span>
<form onSubmit={handleSubmit}> 
    <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
    </div>
    <div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type='password' id='confirm-password'  name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required/>
    </div>

    <div>
        <DropDown setRoleId={setRoleId}/>
    </div>

    <p>Existing user ?? <NavLink to="/login">Login</NavLink></p>
   
</form>
    </>
  )
}
