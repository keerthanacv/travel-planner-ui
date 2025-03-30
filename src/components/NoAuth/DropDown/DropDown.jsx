import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const DropDown = ({setRoleId}) => {
    const [data,setData] = useState([]);
    const [selectedRole,setSelectedRole] = useState();
    const handleRoleSelect = (event) =>
    {
        const selectedRole = data.find((role)=>role.id.toString() === event.target.value); 
        console.log("Selected Role:", selectedRole); // displays selected role with id and name
        setRoleId(selectedRole ? selectedRole.id : "")
    } // to fetch selected role
    useEffect(()=>
        {
         axios.get("http://localhost:8080/getRoles").then((response)=>
         {
            const {id,name}= response.data[0];
            console.log(id+name +" response");
            setData(response.data)
            setSelectedRole(response.data[0].id)
            setRoleId(response.data[0].id)
         }
         )   
        },[setRoleId]) // to execute only once as no dependencies
  return (
    <div>
        <label htmlFor='role'>Select Role</label>
        <select id='role' name='role' value={selectedRole} onChange={handleRoleSelect}>
            {Array.isArray(data) && data.length >0  ? 
            (data.map((role)=>(
                <option id={role.id} value={role.id} key={role.id}>{role.name}</option>)))
                :
            (
                <option key='1'>Loading..</option>
            )}
        </select>
    </div>
  )
}
