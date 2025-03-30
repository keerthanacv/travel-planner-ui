import React from 'react'
import { Home } from './Home/Home'
import Places from './Places/Places'
import { NavLink, useLocation } from 'react-router-dom'
import {useState,useEffect} from 'react'

export const Auth = () => {
  const location = useLocation();
  const [isActiveHomePage,setIsActiveHome] = useState('true');
  useEffect(() => {
    if(location.path === '/home')
    {
     setIsActiveHome(true)
    }
    if(location.path === '/places')
     {
      setIsActiveHome(false)
     }
  }, [location.path]);

  return (
    
   <> 
    <div>Auth</div>
    <button><NavLink to="home">Home</NavLink></button>
    <button><NavLink to="places">Products</NavLink></button>
   
    <div></div>
    <div>
    {isActiveHomePage && <Home/>}
    {!isActiveHomePage && <Places/>}
    </div>
   
   </>
  )
}

export default Auth
