import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <div className="cont">

            <nav>
                <img src=""  className="logo"/>
                <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                <li><NavLink to={"/About"}>About</NavLink></li>

                </ul>
                
            </nav>
            <div className="text33">
               <i>You Can Contact Us On</i> 
            </div>
            <div className="social-icon4">
                <a href="https://instagram.com/best__wishe?igshid=YmMyMTA2M2Y="><img src={"css/img/in.png"}/></a>
                <a href=""><img src={"css/img/em.png"}/></a>
                

            </div>
            
        </div>
       
    </div>
  )
}
