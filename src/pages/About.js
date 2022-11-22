import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <React.Fragment>
        <section>
            <div className="cont">
            <nav>
                <img src=""  className="logo"/>
                <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                <li><NavLink to={"/About"}>About</NavLink></li>
                

                </ul>
                
            </nav>
            
                <div className="text2">
                    <h2>
                        WELCOME TO BEST WISHE'S

                    </h2>
                    <p>
                        We  Providing a Great Opportunity to Give a Best Wishes to Your Loved Once's Like Family/Friend/Love.!!<br/>
                        <b>  We Allow Only 15 Wishes Per Day! All those 15 Wishes Are Visible To Whole World By "Best Wishes Website"</b>
                    <br/>
                    </p>
                    <p>  We Hope That You All Not Miss This Great OPPORTUNITY To Give A Great MEMORIES To Your LOVED Onces!!</p>
                </div>
                <div className="insta">
                <a href=""><img src="css/img/in.png"/></a>
                <a href=""><img src="css/img/em.png"/></a>
            </div>
            </div>
            
    </section>

    </React.Fragment>
      
    
  )
}
