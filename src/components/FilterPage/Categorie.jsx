import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Categorie() {
    const [nbStratAndTele, setNbStratAndTele] = useState({})
    useEffect(() => {
        const fetchStratAndTele = async () => {
            await axios.get('http://localhost:5000/api/guitare/numberStratAndTele')
            .then((res) => {
                setNbStratAndTele(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
        }
        fetchStratAndTele();
    })


    return (
        <div className="categorie_filter">
            <div className="categorie_filter_liste" style={{marginTop:"0px"}}>
            <h2>Catégories</h2>
            <div className="categorie_filter_liste_details">
                <input type="checkbox" id="stratocaster" name="stratocaster" onChange={null}/>
                <label>stratocaster ( {nbStratAndTele.stratNum} )</label>
            </div>
            <div className="categorie_filter_liste_details">
                <input type="checkbox" id="telecaster" name="telecaster" onChange={null}/>
                <label>telecaster ( {nbStratAndTele.teleNum} )</label>
            </div>
            </div>
        </div>
    )
}
