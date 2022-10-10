import React from 'react'
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { GiSmartphone } from "@react-icons/all-files/gi/GiSmartphone";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import footer_logo from '../images/logo_navigation/logo1.webp'
import { Link } from "react-router-dom"


export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer_inside container_header">
                <div className="information_boutique">
                    <h3>Information sur votre boutique</h3>
                    <div className='my_company'>
                        <GoLocation/>
                        <p>My Company , 4578 Marmora Road, Glasgow D04 89GR</p>
                    </div>
                    <div className='my_company'>
                        <GiSmartphone/>
                        <p>0123-456-789</p>
                    </div>
                    <div className='my_company'>
                        <FiMail/>
                        <p>info@demolink.org</p>
                    </div>
                </div>
                <div className="liste">
                    <Link to="/">Promotions</Link>
                    <Link to="/">Nouveaux produits</Link>
                    <Link to="/">Meilleures ventes</Link>
                    <Link to="/">Nos magasins</Link>
                    <Link to="/">Contactez-nous</Link>
                    <Link to="/">Delivery</Link>
                    <Link to="/">About us</Link>
                    <Link to="/">Secure payment </Link>
                    <Link to="/">Pages configuration</Link>
                    <Link to="/">Warranty</Link>
                    <Link to="/">FAQs</Link>
                    <Link to="/">Support</Link>
                    <Link to="/">Sitemap</Link>
                    <Link to="/">Blog</Link>
                </div>
                <div className='footer_logo'>
                    <img src={footer_logo} alt="footer_logo"/>
                </div>
                <div className='footer_lettre_information'>
                    <h3>Lettre d'information</h3>
                    <p>Subscribe today to receive special offers and news delivered right to your inbox every month.</p>
                    <div className='footer_lettre_information_input'>
                        <input type="text" placeholder='Saisissez votre adresse e-mail'/>
                        <button>SOUSCRIRE</button>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div className="trait_copyright"/>
                <p>© 2022 - Ecommerce software by Osman Duri </p>
            </div>
        </div>
    )
}
