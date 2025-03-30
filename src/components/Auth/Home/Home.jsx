import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'

export const Home =  () => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const [homePageData,setHomePageData] = useState();
    const handleClick = async ()=>{
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
  return (
   
    <>
    <div>Home</div>

    <div>
        <p>Home page : {homePageData}</p>
        <button onClick={handleClick}>Go to Home page</button>
    </div>
    </>

  )
}
