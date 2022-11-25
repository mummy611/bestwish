import React,{useEffect,useState} from 'react'
import { getAuth, signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth,provider} from '../firebase'
import { NavLink, useLocation } from 'react-router-dom';



export default function Login() {
    let navigate = useNavigate();

    const detectLogin= async ()=>{
      const token =   localStorage.getItem('wishtoken')
       
          if(token){
            navigate('/CreateWishPage');
          }
          else{
             console.log("Login")
          }
          
          
    }
    useEffect(()=>{
    
      detectLogin();
  },[])

    const signInWithGoogle = ()=> {
        signInWithPopup(auth, provider)
        .then((result)=>{
          localStorage.setItem('wishtoken',result.user.email)
          navigate('/CreateWishPage');
          console.log(result.user.email,result.user.displayName,result.user.photoURL,result.user.phoneNumber);
        }).catch((error) => {
          console.log(error)
        }); 
      };
  return (
    <div>
        <section className="cont">
            <div className="header">
                <div className="login_message">
                    <h1>BEST WISHE'S</h1>
                    <p>Create a Best Wish to Your Loved once's.!!</p>
                    <p>click on login </p>
                
                </div>
                <div className="login_buttong"  >
                    <button className='btn' onClick={signInWithGoogle}>Login with google</button>
                    
                </div>
            </div>
            

            

            
        
        </section>
      
    </div>
  )
}
