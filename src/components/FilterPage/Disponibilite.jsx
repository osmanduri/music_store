import React from 'react'

export default function Disponibilite() {
    return (
        <div className="categorie_filter">
            <div className="categorie_filter_liste">
            <h2>Disponibilité</h2>
            <div className="categorie_filter_liste_details">
                <input type="checkbox" id="stratocaster" name="stratocaster" onChange={null}/>
                <label>en stock</label>
            </div>
            <div className="categorie_filter_liste_details">
                <input type="checkbox" id="telecaster" name="telecaster" onChange={null}/>
                <label>rupture de stock</label>
            </div>
            </div>
        </div>
    )
}
