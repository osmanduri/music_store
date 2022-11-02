import React from 'react'
import clavier from '../../images/cards_home_promotion/clavier.webp'
import eyes from '../../images/cards_home_promotion/eyes.png'
import detail_product from '../../images/cards_home_promotion/details_product.png'

export default function CardsHomePromotion({element, id}) {

    console.log(Object.keys(element))

    const handleMouseEnter = (e) => {
        const panier = document.getElementById('panier'+id)
        panier.style.transform = "translateY(-151px)"
    }

    const handleMouseLeave = (e) => {
        const panier = document.getElementById('panier'+id)
        panier.style.transform = "translateY(0px)"
    }
    return (
        <div className='card_home_promotion'>
            <div className="card_home_promotion_inside" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='nouveau_promotion_'>
                {element.new && <h3>Nouveau</h3>}
                {element.promo && <span>Promo !</span>}
                </div>
                <img src={clavier} alt="img"/>
                <div className='cards_home_promotion_inside_price'>
                    <div className='cards_home_promotion_inside_price_inside' >
                        <p>{Object.keys(element)[2] + ": " + element.prix} €</p><br/>
                        <strong>{element.texte}<br/>Keyboard</strong>
                    </div>
                    <div className='cards_home_promotion_inside_price_ajout_panier' id={"panier"+id}>
                        <div className='cards_home_promotion_inside_price_ajout_panier_inside'>
                            <p>Ajouter au panier</p>
                            <div className='quick_full_view'>
                            <img src={detail_product} alt="eyes"/>
                            <img src={eyes} alt="eyes"/>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}
