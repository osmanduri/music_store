import React, {useState, useEffect} from 'react'
import Categorie from '../components/FilterPage/Categorie'
import Disponibilite from '../components/FilterPage/Disponibilite'
import Marque from '../components/FilterPage/Marque'
import Prix from '../components/FilterPage/Prix'
import Tri from '../components/FilterPage/Tri'
import CardsSimple from '../components/CardsSimple'
import CardsHomePromotion from '../components/Home/CardsHomePromotion'
import axios from 'axios'




export default function ClavierFilterPage() {
    const [clavierData, setClavierData] = useState([])

    useEffect(() => {
        async function fetchAllClavier(){
            await axios.get('http://localhost:5000/api/clavier')
            .then((res) => {
                setClavierData(res.data)
            })
            .catch(err => console.log(err))
        }

        fetchAllClavier();

    }, [])


    return (
        <div className="guitar_filter container_header">
            <div className="guitar_filter_gauche_menu">
                <Categorie/>
                <Disponibilite/>
                <Marque/>
                <Prix/>
            </div>
            <div className="guitar_filter_droite_menu">
                <Tri/>
                <div className="trait_horizontale" style={{marginTop:"20px"}}/>
                
                <div className="cards_home_promotion_outside">
                {
                    clavierData.map((element, index) => {
                        return (
                            <CardsHomePromotion element={element} id={index} key={index}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
