 import React from 'react'
import { Link } from 'react-router-dom'
import vrg from "../assets/react-logo.png"

 const Header = () => {
   return (
    <>
     <nav>
     <img src={vrg}></img>
        <h1>Starter</h1>
        <main>
            <Link to={'/'}>Home</Link>
            <Link to={'/#about'}>About</Link>
            <Link to={'/#services'}>Services</Link>
            <Link to={'/contact'}>Contact</Link>
        </main>
     </nav>
     </>
   )
 }
 
 export default Header