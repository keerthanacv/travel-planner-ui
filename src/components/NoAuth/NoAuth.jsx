import React from 'react'
import Login from './Login/Login';
import { useLocation } from 'react-router-dom';
import { SignUp } from './SignUp/SignUp';

export const NoAuth = () => {
    const location = useLocation();

  return (
    <>
    <div>NoAuth</div>
    <div>
    {location.pathname=="/signup" ? <SignUp/>:<Login/>}

    </div>
    </>
  )
}
