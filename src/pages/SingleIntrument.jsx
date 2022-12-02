import React, {useState, useRef, useEffect} from 'react'
import { AiFillPlusCircle } from "@react-icons/all-files/ai/AiFillPlusCircle";
import { AiFillMinusCircle } from "@react-icons/all-files/ai/AiFillMinusCircle";
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import AjouterPanier from '../components/Home/Utils/AjouterPanier';
import { CgFacebook } from "@react-icons/all-files/cg/CgFacebook";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import CardsSimple from '../components/CardsSimple';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";


export default function SingleIntrument() {
    let guitarId = useParams()

    const [quantiteValue, setQuantiteValue] = useState(1)
    const [valuePicture, setValuePicture] = useState(1)
    const [swiperRef, setSwiperRef] = useState(null);

    const [singleIntrument, setSingleInstrument] = useState({})

    useEffect(() => {
        const fetchGuitarById = async () => {
            await axios.get(`http://localhost:5000/api/guitare/${guitarId.id}`)
            .then((res) => {
                console.log(res.data)
                setSingleInstrument(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
        fetchGuitarById();
    }, [])

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
    }

    const handleSliderPictureDecrease = () => {
        console.log(valuePicture)
        if(valuePicture > 1){
            setValuePicture(valuePicture => valuePicture - 1)
        }

        if(valuePicture === 1){
            setValuePicture(4)
        }
    }

    return (
        <>
        <div className='single_instrument container_header'>
           <div className='trait_horizontale' style={{marginBottom:"30px"}}/>

            <div className='single_instrument_inside'>
            <div className="single_instrument_inside_img">
                <div onClick={handleSliderPictureDecrease} className="chevron_left"><HiChevronLeft/></div>
                {(singleIntrument.chemin_image && singleIntrument.format_image) && <img src={require(`../images/${singleIntrument.chemin_image}/${valuePicture}.jpg`)} alt="logo"/>}
                <div onClick={handleSliderPictureIncrease} className="chevron_right"><HiChevronRight/></div>
                {
                                
                                (singleIntrument.chemin_image && singleIntrument.format_image) && <div className="petite_img">
                                    <img onClick={() => setValuePicture(1)} src={require(`../images/${singleIntrument.chemin_image}/1.jpg`)} alt="logo" id={"img1"} style={{marginLeft:"0px"}}/>
                                    <img onClick={() => setValuePicture(2)} src={require(`../images/${singleIntrument.chemin_image}/2.jpg`)} alt="logo" id={"img2"}/>
                                    <img onClick={() => setValuePicture(3)} src={require(`../images/${singleIntrument.chemin_image}/3.jpg`)} alt="logo" id={"img3"}/>
                                    <img onClick={() => setValuePicture(4)} src={require(`../images/${singleIntrument.chemin_image}/4.jpg`)} alt="logo" id={"img4"}/>
                                </div>
                }

            </div>
            <div className='caracteristique'>
                <p>{singleIntrument.nb_restant < 5 && <span style={{color:"red"}}>Attention seulement </span>}<span>{singleIntrument.nb_restant}</span> produits restant</p>
                
                <h1>{singleIntrument.model}</h1>
            <div className='liste_caracteristique'>
                <p>Marque:  <span>{singleIntrument.marque}</span></p>
                <p>Type:  <span>{singleIntrument.type}</span></p>
                <p>Categorie:  <span>{singleIntrument.categorie}</span></p>
                <p>Fabrication:  <span>{singleIntrument.fabrique}</span></p>
                <p>Annee:  <span>{singleIntrument.annee}</span></p>
                <p>Nombre de corde:   <span>{singleIntrument.nb_cordes}</span></p>
                <p>Orientation:  <span>{singleIntrument.orientation}</span></p>
                <p>Poid: <span>{singleIntrument.poid} kg</span></p>
                <p>Nombre de frettes:  <span>{singleIntrument.nb_frettes}</span></p>
                <div className='trait_horizontale' style={{marginTop:"30px"}}/>
                <div className='prix'>{singleIntrument.prix} €</div>
                <div className='trait_horizontale' style={{marginTop:"30px"}}/>
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
                <div className='ajouter_panier_single_instrument'>
                    <AjouterPanier/>
                </div>
                <div className='trait_horizontale' style={{marginTop:"30px"}}/>
                <div className='single_instrument_reseaux_sociaux'>
                <a href="https://www.facebook.com"><CgFacebook/></a><a href="www.facebook.com" style={{marginLeft:"20px"}}><AiOutlineInstagram/></a><a href="www.facebook.com" style={{marginLeft:"20px"}}><AiOutlineTwitter/></a><a href="www.facebook.com" style={{marginLeft:"20px"}}><AiFillYoutube/></a>
                </div>
                <div className='trait_horizontale' style={{marginTop:"30px", marginBottom:"60px"}}/>
            </div>
            </div>
            </div>
            <h1 className='titre_accessoires'>Accessoires de guitare</h1>
            <div className='cards_simple_outside'>
                <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{
            type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            </Swiper>
            </div>
            <h1 className='titre_autres_produits'>19 autres produits dans la même catégorie</h1>
            <div className='cards_simple_outside'>
                <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{
            type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            <SwiperSlide><CardsSimple/></SwiperSlide>
            </Swiper>
            </div>
        </div>
        </>
        
    )
}
