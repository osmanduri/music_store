import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../images/logo_navigation/logo1.webp"
export default function Navigation() {
    return (
        <div className='navigation container_header'>
            <div className='navigation_inside'>
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <div className='navigation_right'>
                <ul>
                    <NavLink to="/guitare" className={({isActive}) => isActive ? "navActive" : "cool-link"}>Guitares<li></li></NavLink>
                    <NavLink to="/drums" className={({isActive}) => isActive ? "navActive" : "cool-link"}>Batteries<li></li></NavLink>
                    <NavLink to="/" className="cool-link">Clavier</NavLink>
                    <NavLink to="/" className="cool-link">Microphones</NavLink>
                    <NavLink to="/" className="cool-link">Home Studio</NavLink>
                    <NavLink to="/" className="cool-link">Accessoires</NavLink>
                </ul>
                </div>
            </div>
            
        </div>
    )
}
