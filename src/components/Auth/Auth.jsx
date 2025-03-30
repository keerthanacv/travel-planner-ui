import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'


export const Auth = () => {
  return (
    
   <> 
    <div>Auth</div>
    <button><NavLink to="home">Home</NavLink></button>
    <button><NavLink to="places">Places</NavLink></button>
   
    <div></div>
    <div>
    <Outlet /> {/* based on routing it is loaded automatically */}
    </div>
   
   </>
  )
}

export default Auth
