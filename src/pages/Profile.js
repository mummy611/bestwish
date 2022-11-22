/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from 'react'
import { getAuth, signOut } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
function Profile(props) {
    const navigate =useNavigate();
    const auth = getAuth();
    const [Data,setData] =useState();
     // console.log(auth);
    useEffect(() => {
        const interval = setInterval(() => {
          setData(auth)
        }, 2000);
      
        return () => clearInterval(interval);
      }, []);

    if(auth){
        return (
            <div>
                           
                <h1>Email Id:- {auth.currentUser?auth.currentUser.displayName:null}</h1>
            </div>
          )
    }
    else{
        return(
            <h1>Loading</h1>
        )
    }
    
}

export default Profile;