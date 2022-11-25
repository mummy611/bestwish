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
    const [name2,setname2]=useState("");
    const [instaid,setinstaid] = useState("");
    const [instaid2,setinstaid2] = useState("");  
  
const [imag,setimg] =useState("");



  const uploadpost=()=>{
     
 
  const db = getDatabase();
  push(ref(db, 'users/'+auth.currentUser.uid), {
    username: name,
    wish: wish,
    instaid : instaid,
    name:name2,
    instaid2 : instaid2,
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
           
                <h1 style={{color:'black'}} className='text-center'>Create Wish</h1>
                <div className='col-md-6'>

                <form  >
                  
                
                <div class="form-group">
                  <label for="exampleInputEmail1">Wish Type:-</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter wishs' value={wish} onChange={(e)=>setwish(e.target.value)}/>
                  <small id="emailHelp" class="form-text text-muted">enter your wish</small>
                </div>


                <div class="form-group">
                  <label for="exampleInputPassword1">Name:-</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder='enter name'  value={name} onChange={(e)=>setname(e.target.value)}/>
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Insta Id Link:-</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder='enter Insta id link(URL)'  value={instaid} onChange={(e)=>setinstaid(e.target.value)}/>
                </div>

                
                <div class="form-group">
                  <label for="exampleInputPassword1">YourName:-</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder='enter name'  value={name2} onChange={(e)=>setname2(e.target.value)}/>
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Your Insta Id Link:-</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder='enter Insta id link(URL)'  value={instaid2} onChange={(e)=>setinstaid2(e.target.value)}/>
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