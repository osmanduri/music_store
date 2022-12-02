import React, { useState, useEffect, useContext } from 'react'
import PanierUser from '../components/Panier/PanierUser';
import axios from 'axios'
import { UserContext } from '../userContext'

export default function Panier() {
    const [panier, setPanier] = useState([])
    const [updateQuantite, setUpdateQuantite] = useState(false)
    const {userData, setUserData} = useContext(UserContext);
    const [totalPrice, setTotalPrice] = useState()
    useEffect(() => {
        let somme = 0;
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        async function fetchUser(){
            await axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/${data._id}`)
            .then((res) => {
                setPanier(res.data.panier)
                setUserData(res.data)
                localStorage.setItem('storage-userData', JSON.stringify(res.data))

            })
            .catch(err => console.log(err))
        }

        fetchUser();

        //Calcul de la somme total
        data.panier.forEach(element => {
            somme = somme + (element.prix * element.quantite)
        })

        setTotalPrice(somme)

    }, [updateQuantite])
    return (
        <div className="panier container_header">
            {
                panier.length > 0 ?
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
                    panier && panier.map((element, index) => {
                        return (
                            <PanierUser element={element} key={index} updateQuantite={updateQuantite} setUpdateQuantite={setUpdateQuantite}/>
                        )
                    })
                }
                
                <tfoot>
                    <tr>
                        <td id="produit" colSpan="3"></td>
                        <td id="prix_unitaire" colSpan="3">Total Produits</td>
                        <td id="prix_final"><p>{totalPrice} €</p></td>
                    </tr>
                </tfoot>
            </table> 
            :
            <div className="panier_vide">
                <h2>Votre panier</h2>
                <div className="panier_vide_desc">
                <p>Votre panier est vide</p>
                </div>
            </div>
            }
        </div>
    )
}
