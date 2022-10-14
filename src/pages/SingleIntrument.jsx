import React, {useState} from 'react'
import { AiFillPlusCircle } from "@react-icons/all-files/ai/AiFillPlusCircle";
import { AiFillMinusCircle } from "@react-icons/all-files/ai/AiFillMinusCircle";
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";


export default function SingleIntrument() {
    const [quantiteValue, setQuantiteValue] = useState(0)
    const [valuePicture, setValuePicture] = useState(1)

    const quantiteIncrease = () => {
        if(quantiteValue < 5){
            setQuantiteValue(quantiteValue => quantiteValue + 1)
        }
        
    }

    const quantiteDecrease = () => {
        
        if(quantiteValue > 1){
            setQuantiteValue(quantiteValue => quantiteValue - 1)
        }      
    }

    const handleSliderPictureIncrease = () => {
        console.log(valuePicture)
        if(valuePicture < 4){
            setValuePicture(valuePicture => valuePicture + 1)
        }

        if(valuePicture === 4){
            setValuePicture(1)
        }
            console.log(valuePicture)
            const p = document.getElementById(`img`+valuePicture)
            p.style.border = "1px solid red"


        
    }

    const handleSliderPictureDecrease = () => {
        console.log(valuePicture)
        if(valuePicture > 1){
            setValuePicture(valuePicture => valuePicture - 1)
        }

        if(valuePicture === 1){
            setValuePicture(4)
        }
        const p = document.getElementById(`img`+valuePicture)

        p.style.border = "1px solid red"
    }

    return (
        <div className='single_instrument container_header'>
           <div className='trait_horizontale' style={{marginBottom:"30px", background:"red"}}/>

            <div className='single_instrument_inside'>
            <div className="single_instrument_inside_img">
                <div onClick={handleSliderPictureDecrease} className="chevron_left"><HiChevronLeft/></div>
                <img src={require(`../images/guitars/Fender/strat-1957-american-vintage_${valuePicture}.jpg`)} alt="logo"/>
                <div onClick={handleSliderPictureIncrease} className="chevron_right"><HiChevronRight/></div>
                <div className="petite_img">
                    <img onClick={() => setValuePicture(1)} src={require(`../images/guitars/Fender/strat-1957-american-vintage_1.jpg`)} alt="logo" id={"img1"} style={{marginLeft:"0px"}}/>
                    <img onClick={() => setValuePicture(2)} src={require(`../images/guitars/Fender/strat-1957-american-vintage_2.jpg`)} alt="logo" id={"img2"}/>
                    <img onClick={() => setValuePicture(3)} src={require(`../images/guitars/Fender/strat-1957-american-vintage_3.jpg`)} alt="logo" id={"img3"}/>
                    <img onClick={() => setValuePicture(4)} src={require(`../images/guitars/Fender/strat-1957-american-vintage_4.jpg`)} alt="logo" id={"img4"}/>
                </div>  
            </div>
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
                    <i onClick={quantiteDecrease}><AiFillMinusCircle/></i>
                    <input type="number" placeholder='' value={quantiteValue} id="quantite"/>
                    <i onClick={quantiteIncrease}><AiFillPlusCircle/></i>
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
