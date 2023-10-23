/*import React from 'react'
import { Link } from 'react-router-dom'
import vrg from "../assets/react-logo.png"
import { HashLink } from 'react-router-hash-link'


const Header = () => {
    return (
        <nav>
            <img src={vrg}></img>
            <h1>Starter</h1>
            <main>
                <Link to={'/'}>Home</Link>
                <HashLink to={'/#about'}>About</HashLink>
                <Link to={'/services'}>Services</Link>
                <Link to={'/contact'}>Contact</Link>
            </main>
        </nav>
    )
}

export default Header*/

import React from 'react'
import { Link } from 'react-router-dom'
import vrg from "../assets/react-logo.png"
import { HashLink } from 'react-router-hash-link'

const Header = () => {
    return (
        <nav>
            <img src={vrg}></img>
            <h1>Starter</h1>
            <main>
                <HashLink to={'/#home'}>Home</HashLink>
                <HashLink to={'/#about'}>About</HashLink>
                <Link to={'/services'}>Services</Link>
                <Link to={'/contact'}>Contact</Link>
            </main>
        </nav>
    )
}

export default Header