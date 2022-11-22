import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './../Componets/NavBar';
 
import { storage ,databaseref,app,auth,database} from '../firebase';
 
import { getDatabase, ref, set,push } from "firebase/database";
import Upload from '../Componets/Upload';

function CreateWishPage(props) {
  
    const navigate =useNavigate();
    const auth = getAuth();
    
 console.log(auth);
    const [wish,setwish]=useState("");
    const [name,setname]=useState("");
    const [instaid,setinstaid] = useState(""); 
  
const [imag,setimg] =useState("");



  const uploadpost=()=>{
     
 
  const db = getDatabase();
  push(ref(db, 'users/'+auth.currentUser.uid), {
    username: name,
    wish: wish,
    instaid : instaid,
    Image:imag
  });
  alert("uploded")
  setimg("");
  setinstaid("");
  setname("");
  setwish("");
  }




  return (
<> 
<NavBar/>
            <div>
           
                <h1 style={{color:'black'}} className='text-center'>Create Wish Page</h1>
                <div className='col-md-6'>

                <form  >
                
                <div class="form-group">
                  <label for="exampleInputEmail1">wish</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter wishs' value={wish} onChange={(e)=>setwish(e.target.value)}/>
                  <small id="emailHelp" class="form-text text-muted">enter your wish</small>
                </div>


                <div class="form-group">
                  <label for="exampleInputPassword1">Name:-</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder='enter name'  value={name} onChange={(e)=>setname(e.target.value)}/>
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Insta Id Link:-</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder='enter Insta id link'  value={instaid} onChange={(e)=>setinstaid(e.target.value)}/>
                </div>
               
               

               
            </form>
          
              <Upload setter={setimg}/>
                </div>

                <button onClick={uploadpost}>Upload Post</button>
            </div>
            </>
    )
}

export default CreateWishPage;