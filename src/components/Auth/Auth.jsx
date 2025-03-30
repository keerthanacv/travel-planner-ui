import React from 'react'
import { Home } from './Home/Home'
import Places from './Places/Places'
import { NavLink, useLocation } from 'react-router-dom'
import {useState,useEffect} from 'react'

export const Auth = () => {
  const location = useLocation();
  const [isActiveHomePage,setIsActiveHome] = useState(true);
  useEffect(() => {
    if(location.pathname === '/auth/home')
    {
     setIsActiveHome(true)
    }
    if(location.pathname === '/auth/places')
     {
      setIsActiveHome(false)
     }
  }, [location.pathname]);

  return (
    
   <> 
    <div>Auth</div>
    <button><NavLink to="/auth/home">Home</NavLink></button>
    <button><NavLink to="/auth/places">Places</NavLink></button>
   
    <div></div>
    <div>
    {isActiveHomePage && <Home/>}
    {!isActiveHomePage && <Places/>}
    </div>
   
   </>
  )
}

export default Auth
