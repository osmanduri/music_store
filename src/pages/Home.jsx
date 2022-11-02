import React from 'react'
import fender_home from "../images/guitars/home_fender.jpg"
import CardsHomeCat from '../components/CardsHomeCat'
import cards from '../data/cards_home'
import Populaire from '../components/Home/Populaire'
import AjouterPanier from '../components/Home/Utils/AjouterPanier'

export default function Home() {
    console.log(cards)
    return (
        <div className='home'>
            <img src={fender_home} alt="fender_home"/>
            <div className='text_img'>
            <h2>Promotions<br/>Guitares</h2>
            <p>Profitez de 25% de reduction sur toutes nos guitares Fender et Gibson !</p>
            <a href="/">ACHETER</a>
            </div>
            <div className='cars_home_outside'>
            {
                cards.map((e, index) => {
                    return (
                        <CardsHomeCat element={e} key={index}/>
                    )
                })
            }
            </div>
            <Populaire/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2584725073184!2d2.3389469!3d48.872349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e39692e297f%3A0x7cbff8f8ce426ccb!2s8%20Bd%20Haussmann%2C%2075009%20Paris!5e0!3m2!1sen!2sfr!4v1665424734066!5m2!1sen!2sfr" style={{width:"100%", height:"600px", border:"0", marginBottom:"-3px" }}></iframe> {/* width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"*/}
        <AjouterPanier titre="ajouter panier"/>
        </div>
    )
}
