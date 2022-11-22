import React,{useState,useEffect} from 'react'
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
export default function WishCrad(props) {

    const auth = getAuth();
  const [Data,setData] =useState([]);
    const getdata=()=>{
        const db = getDatabase();
        const starCountRef = ref(db, 'users/4YmygqBaNBPiO5qcfLcglSN2Z1I2');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setData(data)
        console.log(data)
        });
    }


    useEffect(()=>{
        getdata();
    },[])

    if(Data){
  return (
    <React.Fragment>
        <section className="conta">
        {Object.values(Data).map((value, index) => {
        return (
            <div className="cards" key={index}>
                
                    <div className='card-imgs' >
                    <img src={value.Image}  width="290px" height={"430px"}/>         
    
                    </div>
                    <h3>{value.wish}</h3>
                    <h4>{value.username}</h4>
                        <p></p>
                    <div className="social-icon">
                        <a href={value.instaid}><img src={"css/img/in.png"}/> </a>
                    </div>
                    
                        
                </div>
        );
      })}


        
             


          
        </section>
      
    </React.Fragment>
  )
    }
    return(
        <h1>Loading</h1>
    )
}

