import React from 'react'
import clavier from '../images/cards_home_promotion/clavier.webp'
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
export default function CardsSimple() {
    return (
        <div className='cards_simple'>
            <div className='cards_simple_inside'>
                <img src={clavier} alt="clavier"/>
                <p>Casio CTKVK3 PAK 61-Key Premium Keyboard </p>
                <div className='text_span'>Our prices are so low, and you may wonder if our products are used or... </div>
                <div className='trait_horizontale' style={{marginTop:"15px"}}/>
                <div className='cards_simple_price_panier'>
                <p>625.00 €</p>
                <i><AiOutlineShoppingCart/></i>
                </div>
            </div>
        </div>
    )
}
