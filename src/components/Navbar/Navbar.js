import React from 'react'
import logo from '../../logo.svg' // REMEMBER, LOGO MUST BE IN SOURCE FOLDER TO BE CALLED IN!
import "./navbar.scss"
export default function Navbar() {
    return (
        <nav className="navbar">
        <img src={logo} alt="city tours company" className="logo" />
            <ul className="nav-links">
                <li><a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li><a href="/" className="nav-link">
                        About
                </a>
                </li>
                <li><a href="/" className="nav-link">
                        Tours
                </a>
                </li>
            </ul>
        </nav>
    )
}