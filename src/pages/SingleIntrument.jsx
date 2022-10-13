import React from 'react'

export default function SingleIntrument() {
    return (
        <div className='single_instrument container_header'>
           <div className='trait_horizontale' style={{marginBottom:"30px", background:"red"}}/>

            <div className='single_instrument_inside'>
            <img src="https://ld-prestashop.template-help.com/prestashop_64882/img/p/4/5/45-tm_large_default.jpg" alt="logo"/>
            <div className='caracteristique'>
                <p><span>10</span> produits</p>
                <h1>Dean V Dave Mustaine Guitar Bolt-on Classic Black</h1>
            <div className='liste_caracteristique'>
                <p>Fabricant: <span>Hartke</span></p>
                <p>Neck Material: <span>Walnut</span></p>
                <p>Strings: <span>Roundwound Strings</span></p>
                <p>Warranty: <span>6 Months</span></p>
                <p>Pickup: <span>Soap Bar</span></p>
                <p>Nut Width : <span>1.68</span></p>
                <p>Scale Length: <span>24.75</span></p>
                <p>Poid: <span>5 kg</span></p>
                <p>Frequency Range: <span>65 - 20kHz</span></p>
                <div className='trait_horizontale' style={{marginTop:"30px"}}/>
                <div className='prix'>211,60 €</div>
                <div className='trait_horizontale' style={{marginTop:"30px"}}/>
                <div className='color'>
                <p>Couleur:</p>
                <div className='color_cercle'>
                    <div className='color_cercle_single'/>
                    <div className='color_cercle_single'/>
                    <div className='color_cercle_single'/>
                </div>
                </div>
                <div className='guitare_size'>
                <p>Keyboard Material:</p>
                <select>
                            <option value="aze" selected disabled hidden>Toutes Categories</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                </select>
                </div>
                <div className='quantite'>
                    <p>Quantité: </p>
                    <input type="number" placeholder=''/>
                </div>
                <div className='ajouter_panier'>
                    <p>Ajouter au panier</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
