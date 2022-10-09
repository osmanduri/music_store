import React from 'react'
import fender_home from "../images/guitars/home_fender.jpg"
import CardsHomeCat from '../components/CardsHomeCat'
import cards from '../data/cards_home'
import Populaire from '../components/Home/Populaire'

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
        </div>
    )
}
