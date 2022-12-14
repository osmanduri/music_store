import React, {useState, useRef, useEffect, useContext} from 'react'
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
import Modal from 'react-modal';
import { FcCheckmark } from "@react-icons/all-files/fc/FcCheckmark"
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { Link, useLocation } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { UserContext } from '../userContext';

const customStylesAfterAdd = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:"#10131c",
      width:"450px",
      height:"625px",
      boxShadow: "0px 1px 3px #fe7600",
      border:"none",
      zIndex:"999",
      padding:"40px"
      
      
    },
    overlay:{
        backgroundColor:"rgb(0,0,0, 0.2)",
        
    }
  };

  Modal.setAppElement('#root');


export default function SingleIntrument() {
    const url_id = useParams()
    const location = useLocation()

    const [quantiteValue, setQuantiteValue] = useState(1)
    const [valuePicture, setValuePicture] = useState(0)
    const [swiperRef, setSwiperRef] = useState(null);

    const [singleIntrument, setSingleInstrument] = useState({})
    const { userData, setUserData } = useContext(UserContext)

    const [modalIsOpenProductAdded, modalSetIsOpenProductAdded] = useState(false)
    const [totalPanier, setTotalPanier] = useState(valuePicture)

    useEffect(() => {
        window.scrollTo(0, 0)
        const instrument = location.pathname.split('/')[1]
        
        const fetchGuitarById = () => {
            axios.get(`http://localhost:5000/api/${instrument}/${url_id.id}`)
            .then((res) => {
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
        if(valuePicture < singleIntrument.img.length){
            setValuePicture(valuePicture => valuePicture + 1)
        }

        if(valuePicture === singleIntrument.img.length - 1){
            setValuePicture(0)
        }
    }

    const handleSliderPictureDecrease = () => {
        if(valuePicture > 0){
            setValuePicture(valuePicture => valuePicture - 1)
        }else{
            setValuePicture(singleIntrument.img.length - 1)
        }
    }

    const addBasket = async () => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        const payload = {
            id:singleIntrument._id,
            model:singleIntrument.model,
            instrument:singleIntrument.instrument,
            prix:singleIntrument.prix,
            quantite: quantiteValue
        }
        if(data){
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/panier/add/${data._id}`, payload)
            .then((res) => {
                localStorage.setItem('storage-userData', JSON.stringify(res.data))
                setUserData(res.data)
                modalSetIsOpenProductAdded(true)
            })
            .catch((err) => console.log(err))
        }else{
            console.log('vous devez vous connecter')
        }
        
    }

    function closeModalProductAdded(){
        modalSetIsOpenProductAdded(false);
    }

    function afterOpenModalProductAdded(){
        let somme = 0;

        userData.panier.forEach(element => {
            somme = somme + (element.prix * element.quantite)
        })

        setTotalPanier(somme)

    }


    return (
        <>
        <div className='single_instrument container_header'>
           <div className='trait_horizontale' style={{marginBottom:"30px"}}/>

            <div className='single_instrument_inside'>
            <div className="single_instrument_inside_img">
                <div onClick={handleSliderPictureDecrease} className="chevron_left"><HiChevronLeft/></div>
                {singleIntrument.img && <img src={require(`../images/${singleIntrument.img[valuePicture]}`)} alt="logo"/>}
                <div onClick={handleSliderPictureIncrease} className="chevron_right"><HiChevronRight/></div>
                {
                                
                                singleIntrument.img && 
                                
                                <div className="petite_img">
                                    {
                                        singleIntrument.img.map((element, index) => {
                                            return (
                                                <img onClick={() => setValuePicture(index)} src={require(`../images/${element}`)} alt="logo" id={"img"+index}/>
                                            )
                                        })
                                    }

                                </div>
                                }

            </div>
            <div className='caracteristique'>
                <p>{singleIntrument.nb_restant < 5 && <span style={{color:"red"}}>Attention seulement </span>}<span>{singleIntrument.nb_restant}</span> produits restant</p>
                
                <h1>{singleIntrument.model}</h1>
            <div className='liste_caracteristique'>
                { singleIntrument.marque && <p>Marque:  <span>{singleIntrument.marque}</span></p> }
                { singleIntrument.type && <p>Type:  <span>{singleIntrument.type}</span></p> }
                { singleIntrument.categorie && <p>Categorie:  <span>{singleIntrument.categorie}</span></p> }
                { singleIntrument.fabrique && <p>Fabrication:  <span>{singleIntrument.fabrique}</span></p> }
                { singleIntrument.annee && <p>Annee:  <span>{singleIntrument.annee}</span></p> }
                
                    { singleIntrument.nb_cordes && <p>Nombre de corde:   <span>{singleIntrument.nb_cordes}</span></p> }
                    { singleIntrument.orientation && <p>Orientation:  <span>{singleIntrument.orientation}</span></p> }
                    { singleIntrument.nb_frettes && <p>Nombre de frettes:  <span>{singleIntrument.nb_frettes}</span></p> }
                
                { singleIntrument.poid && <p>Poid: <span>{singleIntrument.poid} kg</span></p> }
                { singleIntrument.connecteur && <p>Connecteur: <span>{singleIntrument.connecteur}</span></p> }
                { singleIntrument.nb_touche && <p>Nombre de touche: <span>{singleIntrument.nb_touche}</span></p> }
                { singleIntrument.toucher && <p>Toucher: <span>{singleIntrument.toucher}</span></p> }
                
                <div className='trait_horizontale' style={{marginTop:"30px"}}/>
                <div className='prix'>{singleIntrument.prix} ???</div>
                <div className='trait_horizontale' style={{marginTop:"30px"}}/>
                <div className='guitare_size'>
                    <h4>Description:</h4>
                    <p>{singleIntrument.description}</p>
                </div>
                <div className='quantite'>
                    <p>Quantit??: </p>
                    <i onClick={quantiteDecrease}><AiFillMinusCircle/></i>
                        <input type="number" placeholder='' value={quantiteValue} onChange={null} id="quantite"/>
                    <i onClick={quantiteIncrease}><AiFillPlusCircle/></i>
                </div>
                <div className='ajouter_panier_single_instrument'>
                    <i onClick={addBasket}><AjouterPanier/></i>
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
            <h1 className='titre_autres_produits'>19 autres produits dans la m??me cat??gorie</h1>
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
        <Modal
                isOpen={modalIsOpenProductAdded}
                onAfterOpen={afterOpenModalProductAdded}
                onRequestClose={closeModalProductAdded}
                style={customStylesAfterAdd}
                contentLabel="View product"
                closeTimeoutMS={400}
                openTimeoutMS={400}
                >
                <div className="modal_view_product_produit_ajouter">
                <div className="produit_ajoute_succes">
                    <i><FcCheckmark/></i>
                    <h2>Produit ajout?? au panier avec succ??s</h2>
                </div>
                <div className="img_details">
                {singleIntrument.img && <img src={require(`../images/${singleIntrument.img[valuePicture]}`)} alt="logo"/>}
                    <div className="img_details_p">
                        <h3>{singleIntrument.model}</h3>
                        <div className="marque_categorie">
                            <p>Marque: <span>{singleIntrument.marque}</span></p>
                            <p>Type: <span>{singleIntrument.categorie}</span></p>
                        </div>
                        <div className="trait_horizontale"/>
                        <div className="quantite_total">
                            <p>Quantite:  <span>{quantiteValue}</span></p>
                            <p>Total: <span>{quantiteValue * singleIntrument.prix} ???</span></p>
                        </div>

                    </div>
                </div>
                <div className="nombre_produit_panier">
                    <i><AiOutlineShoppingCart/></i>
                    <h2>IL Y A {userData && userData.panier ? userData.panier.length : ""} PRODUITS DANS VOTRE PANIER.</h2>
                </div>
                <div className="details_panier_inside">
                    <p>Total produits::  <span>{quantiteValue}</span></p>
                    <p>Frais de port: <span>Livraison gratuite !</span></p>
                    <p>Total Panier:  <span>{totalPanier} ???</span></p>
                </div>
                <div className="commander_continuer_mes_achats">
                    <button onClick={closeModalProductAdded}>Continuer mes achats</button>
                    <Link to="/panier">Commander</Link>
                </div>
                    <p className="cross_exist" onClick={closeModalProductAdded}>X</p>
                </div>
            </Modal>
        </>
        
    )
}
