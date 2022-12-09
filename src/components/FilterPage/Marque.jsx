import React from 'react'

export default function Marque({}) {
    const marque = [
        "fender",
        "gibson"
    ]
    return (
        <div className="categorie_filter">
            <div className="categorie_filter_liste">
            <h2>Marque</h2>
            <div className="categorie_filter_liste_details">
                <input type="checkbox" id="fender" name="fender" onChange={null}/>
                <label>fender</label>
            </div>
            <div className="categorie_filter_liste_details">
                <input type="checkbox" id="gibson" name="gibson" onChange={null}/>
                <label>gibson</label>
            </div>
            {
                marque.map(element => {
                    return (
                        <div className="categorie_filter_liste_details">
                            <input type="checkbox" id="gibson" name="gibson" onChange={null}/>
                            <label>{element}</label>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
