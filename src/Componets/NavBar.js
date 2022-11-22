import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <nav>
    <img src=""  className="logo"/>
    <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/About"}>About</NavLink></li>
        <li><NavLink to={"/Profile"}>Profile</NavLink></li>
    

    </ul>
    
</nav>
  )
}

export default NavBar;