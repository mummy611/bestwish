import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './../Componets/NavBar';
import { getDatabase, set ,push,child,onValue} from "firebase/database";
import { storage ,databaseref,app,auth,database} from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
//import { getDatabase, ref, set } from "firebase/database";

function Upload(props) {
  
    const navigate =useNavigate();
    const auth = getAuth();
    
  
  // State to store uploaded file
  const [file, setFile] = useState("");
 
  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
      setFile(event.target.files[0]);
  }

  const handleUpload = () => {
      if (!file) {
          alert("Please upload an image first!");
      }

      const storageRef = ref(storage, `/files/${file.name}`);

      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
          "state_changed",
          (snapshot) => {
              const percent = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );

              // update progress
              setPercent(percent);
          },
          (err) => console.log(err),
          () => {
              // download url
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                  props.setter(url);
              });
          }
      );
  };

 




  return (

            <div>
            

               
               
            <div>
            <input type="file" onChange={handleChange} accept="/image/*" />
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent} "% done"</p>
        </div>
                </div>
        
  
    )
}

export default Upload;