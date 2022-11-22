import React from 'react'

import { NavLink } from 'react-router-dom'
import NavBar from '../Componets/NavBar'

export default function Home() {
  return (
    <React.Fragment>
        <div className="cont">
            <NavBar/>
        <div className="text">
            <h1>
                BEST WISHE'S
            </h1>
            <h3>Wish your friend/family/love with a beautifull memory!</h3>

            <div className="row">
                <NavLink to={"/Login"}>Create Wish</NavLink>
                <NavLink to={"/WishCard"}>Wishe's <span>&#x27F6;</span></NavLink>
                <span>You Can Create A Best Wish And Memorable<br/> To Your Loved One's </span>

            </div>    
        </div>

        <div className="social-icon">
            <a href="https://instagram.com/best__wishe?igshid=YmMyMTA2M2Y="><img src={"css/img/in.png"}/></a>
            <a href=""><img src={"css/img/tel.png"}/></a>
            <a href=""><img src={"css/img/em.png"}/></a>

        </div>
          
    
    </div>


    </React.Fragment>
  )
}

