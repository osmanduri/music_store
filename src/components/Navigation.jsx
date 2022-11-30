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
                    <NavLink to="/clavier" className={({isActive}) => isActive ? "navActive" : "cool-link"}>Clavier</NavLink>
                    <NavLink to="/microphone" className={({isActive}) => isActive ? "navActive" : "cool-link"}>Microphones</NavLink>
                    <NavLink to="/home_studio" className={({isActive}) => isActive ? "navActive" : "cool-link"}>Home Studio</NavLink>
                    <NavLink to="/accessoire" className={({isActive}) => isActive ? "navActive" : "cool-link"}>Accessoires</NavLink>
                </ul>
                </div>
            </div>
            
        </div>
    )
}
