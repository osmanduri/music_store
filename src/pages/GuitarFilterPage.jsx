import React, {useState, useEffect} from 'react'
import Categorie from '../components/FilterPage/Categorie'
import Disponibilite from '../components/FilterPage/Disponibilite'
import Marque from '../components/FilterPage/Marque'
import Prix from '../components/FilterPage/Prix'
import Tri from '../components/FilterPage/Tri'
import CardsSimple from '../components/CardsSimple'
import CardsHomePromotion from '../components/Home/CardsHomePromotion'
import axios from 'axios'
import data from '../data/cards_home_promotion';




export default function GuitarFilterPage() {
    const [guitarData, setGuitarData] = useState([])
    const [categorieStratocaster, setCategorieStratocaster] = useState('')
    const [categorieTelecaster, seCategorieTelecaster] = useState('')
    useEffect(() => {
        async function fetchAllGuitar(){
            await axios.get('http://localhost:5000/api/guitare')
            .then((res) => {
                setGuitarData(res.data)
            })
            .catch(err => console.log(err))
        }

        fetchAllGuitar();

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
                    guitarData.map((element, index) => {
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
