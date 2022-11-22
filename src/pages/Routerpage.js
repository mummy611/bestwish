import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './Home'
import Wish from './wish'
import WishCrad from '../Componets/WishCrad';
import About from './About'
import Contact from './contact'
import Login from './Login';
import CreateWishPage from './CreateWishPage';
import Profile from './Profile';

export default function Routerpage() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route  path="/wish"  element={< Wish/>} />
          <Route path="/About"  element={<About />} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/Login"  element={<Login/>} />
          <Route path="/WishCard"  element={<WishCrad/>} />
          <Route path="/CreateWishPage"  element={<CreateWishPage/>} />
          <Route path="/Profile"  element={<Profile/>} />
        </Routes>
      </BrowserRouter>
      
    
  )
}
