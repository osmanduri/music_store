import React from 'react'
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { Link, useParams } from 'react-router-dom';

export default function PanierUser({element}) {
    console.log(element)
    return (
        <tbody>
            <tr>
                <td id="produit_td">
                    {
                        element.type === "Guitare electrique" && 
                            <Link to={`/guitare/${element._id}`}>
                                <img src={require('../../images/' + element.chemin_image + "/" + "1." + element.format_image)} alt="guitar"/>
                            </Link>
                    }

                </td>
                <td id="description_td">
                    <a href="#"><p>{element.model}</p></a>
                </td>
                <td id="disponibilite_td">
                    <p>Disponible</p>
                </td>
                <td id="prix_unitaire_td">
                    <p>{element.prix}</p>
                </td>
                <td id="quantite_td">
                    <div className="panier_quantite">
                        <span>{1}</span>
                        <div className="panier_increase_decrease">
                            <span><AiOutlineMinus/></span>
                            <span><AiOutlinePlus/></span>
                        </div>
                    </div>
                </td>
                <td id="total_td">test</td>
                <td id="trash"><i><BsTrash/></i></td>
            </tr>
        </tbody>
    )
}
