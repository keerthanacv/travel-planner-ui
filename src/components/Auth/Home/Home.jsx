import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'

export const Home =  () => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const [homePageData,setHomePageData] = useState();
    useEffect(()=>{
    const fetchHomePageDetails = async ()=>{
        try{
            const response = await axios.get("http://localhost:8080/home",
                {
                    headers:
                    {
                        "Authorization" : `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            setHomePageData(response.data);
        }
        catch(error)
        {
            console.log(error);
            Promise.reject();
        }
    
    }
    fetchHomePageDetails
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
