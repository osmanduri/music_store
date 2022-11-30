import React, { useState, useEffect } from 'react'
import PanierUser from '../components/Panier/PanierUser';
import axios from 'axios'

export default function Panier() {
    const [panier, setPanier] = useState([])
    useEffect(() => {
        async function lol(){
            await axios.get('http://localhost:5000/api/guitare/multiple')
            .then((res) => {
                console.log(res.data)
                setPanier(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }

        lol();

    }, [])
    return (
        <div className="panier container_header">
            <table>
                <thead>
                    <tr>
                        <th id="produit">Produit</th>
                        <th id="description">Description</th>
                        <th id="disponibilite">Disponibilité</th>
                        <th id="prix_unitaire">Prix unitaire</th>
                        <th id="quantite">Quantité</th>
                        <th id="total">Total</th>
                        <th id="none">None</th>
                    </tr>
                </thead>
                {
                    panier.map((element, index) => {
                        return (
                            <PanierUser element={element} key={index}/>
                        )
                    })
                }
                
                <tfoot>
                    <tr>
                        <td id="produit" colSpan="3"></td>
                        <td id="prix_unitaire" colSpan="3">Total Produits</td>
                        <td id="prix_final"><p>3200£</p></td>
                    </tr>
                </tfoot>
            </table> 
        </div>
    )
}
