import React from 'react'
import logo from "../images/logo_navigation/logo1.webp"
export default function Navigation() {
    return (
        <div className='navigation container_header'>
            <div className='navigation_inside'>
                <img src={logo} alt="logo"/>
                <div className='navigation_right'>
                <ul>
                    <a href="/guitare" className="cool-link">Guitares</a>
                    <a href="/" className="cool-link">Batteries</a>
                    <a href="/" className="cool-link">Clavier</a>
                    <a href="/" className="cool-link">Microphones</a>
                    <a href="/" className="cool-link">Home Studio</a>
                    <a href="/" className="cool-link">accessoires</a>
                </ul>
                </div>
            </div>
            
        </div>
    )
}
