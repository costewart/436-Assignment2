import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Styling/Navbar.css'

const Navbar = () => {
    return (
        <nav className = "navWrapper">
            <div className = "container">
                <ul className = "right">
                    <li className = "li"> <Link to="/about"> About </Link> </li>
                    <li className = "li"> <Link to="/messages"> Messages </Link> </li>
                    <li className = "li"> <Link to="/" > Home </Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar