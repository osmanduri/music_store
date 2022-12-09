import React, {useState, useEffect} from 'react'
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

export default function PanierUser({element, updateQuantite, setUpdateQuantite}) {
    const [instrument, setInstrument] = useState({})
    useEffect(() => {
        window.scrollTo(0, 0)
        async function fetchInstrumentPanier(){
            await axios.get(`${process.env.REACT_APP_BASE_URL}/api/${element.instrument}/${element.id}`)
            .then((res) => {
                setInstrument(res.data)                
            })
            .catch(err => console.log(err))
        }

        fetchInstrumentPanier();
    },[])

    const augmenterQuantitePanier = async () => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        const payload = {
            instrument_id:element.id
        }
        if(data){
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/panier/incrementer/${data._id}`, payload)
            .then((res) => {
                setUpdateQuantite(!updateQuantite)
                localStorage.setItem('storage-userData', JSON.stringify(res.data))
            })
            .catch(err => console.log(err))
        }
    }

    const diminuerQuantitePanier = async () => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        const payload = {
            instrument_id:element.id
        }
        if(data){
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/panier/decrementer/${data._id}`, payload)
            .then((res) => {
                setUpdateQuantite(!updateQuantite)
                localStorage.setItem('storage-userData', JSON.stringify(res.data))
            })
            .catch(err => console.log(err))
        }
    }

    const removeInstrumentPanier = async () => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        const payload = {
            instrument_id: element.id
        }

        if(data){
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/panier/remove/${data._id}`, payload)
            .then((res) => {
                setUpdateQuantite(!updateQuantite)
                localStorage.setItem('storage-userData', JSON.stringify(res.data))
            })
            .catch(err => console.log(err))
        }
    }
    return (
        <tbody>
            <tr>
                <td id="produit_td">
                    {
                        instrument.instrument === "guitare" && 
                            <Link to={`/${element.instrument}/${element.id}`}>
                                <img src={require(`../../images/${instrument.img[0]}`)} alt="logo"/>
                            </Link>
                    }
                    {
                        instrument.instrument === "clavier" && 
                            <Link to={`/${element.instrument}/${element.id}`}>
                                <img src={require(`../../images/${instrument.img[0]}`)} alt="logo"/>
                            </Link>
                    }

                </td>
                <td id="description_td">
                    <a href="#"><p>{instrument.model}</p></a>
                </td>
                <td id="disponibilite_td">
                    <p>Disponible</p>
                </td>
                <td id="prix_unitaire_td">
                    <p>{instrument.prix} €</p>
                </td>
                <td id="quantite_td">
                    <div className="panier_quantite">
                        <span>{element.quantite}</span>
                        <div className="panier_increase_decrease">
                            <span onClick={diminuerQuantitePanier}><AiOutlineMinus/></span>
                            <span onClick={augmenterQuantitePanier}><AiOutlinePlus/></span>
                        </div>
                    </div>
                </td>
                <td id="total_td">{element.quantite * instrument.prix} €</td>
                <td id="trash"><i onClick={removeInstrumentPanier}><BsTrash/></i></td>
            </tr>
        </tbody>
    )
}
