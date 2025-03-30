import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import axiosInstance from '../../../services/axiosInstance'

export const Home =  () => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const [homePageData,setHomePageData] = useState();
    useEffect(()=>{
    const fetchHomePageDetails = async ()=>{
        try{
            const response = await axiosInstance.get("/home");
            console.log(JSON.stringify(response));
            setHomePageData(response);
        }
        catch(error)
        {
            console.log(error);
            Promise.reject();
        }
    
    }
    fetchHomePageDetails()
},[accessToken])
  return (
   
    <>
    <div>Home</div>

    <div>
        <p>Home page : {homePageData}</p>
    </div>
    </>

  )
}
