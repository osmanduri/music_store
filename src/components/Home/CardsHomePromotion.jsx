import React, {useState, useContext} from 'react'
import eyes from '../../images/cards_home_promotion/eyes.png'
import detail_product from '../../images/cards_home_promotion/details_product.png'
import axios from 'axios'
import { UserContext } from '../../userContext'
import Modal from 'react-modal';
import { AiFillPlusCircle } from "@react-icons/all-files/ai/AiFillPlusCircle";
import { AiFillMinusCircle } from "@react-icons/all-files/ai/AiFillMinusCircle";
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import { FcCheckmark } from "@react-icons/all-files/fc/FcCheckmark"
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import AjouterPanier from './Utils/AjouterPanier'
import { Link } from 'react-router-dom'


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:"#10131c",
      width:"740px",
      height:"600px",
      boxShadow: "0px 1px 3px #fe7600",
      border:"none",
      zIndex:"999",
      padding:"40px"
      
      
    },
    overlay:{
        backgroundColor:"rgb(0,0,0, 0.2)",
        
    }
  };

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

export default function CardsHomePromotion({element, id}) {
    const {userData, setUserData} = useContext(UserContext);
    const [quantiteValue, setQuantiteValue] = useState(1)
    const [valuePicture, setValuePicture] = useState(0)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenProductAdded, modalSetIsOpenProductAdded] = useState(false)
    const [totalPanier, setTotalPanier] = useState(0)
  
    function openModal() {
      setIsOpen(true);
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


  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
       
    }
  
    function closeModal() {
      setIsOpen(false);
      setQuantiteValue(1)
    }

    const handleMouseEnter = (e) => {
        const panier = document.getElementById('panier'+id)
        panier.style.transform = "translateY(-151px)"
    }

    const handleMouseLeave = (e) => {
        const panier = document.getElementById('panier'+id)
        panier.style.transform = "translateY(0px)"
    }

    const addBasket = async () => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        const payload = {
            id:element._id,
            model:element.model,
            instrument:element.instrument,
            prix:element.prix,
            quantite: quantiteValue
        }

        if(data){
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/panier/add/${data._id}`, payload)
            .then((res) => {
                localStorage.setItem('storage-userData', JSON.stringify(res.data))
                setUserData(res.data)
                setIsOpen(false)
                modalSetIsOpenProductAdded(true)
            })
            .catch((err) => console.log(err))
        }else{
            console.log('vous devez vous connecter')
        }
        
    }

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
        if(valuePicture < element.img.length){
            setValuePicture(valuePicture => valuePicture + 1)
        }

        if(valuePicture === element.img.length - 1){
            setValuePicture(0)
        }
    }

    const handleSliderPictureDecrease = () => {
        if(valuePicture > 0){
            setValuePicture(valuePicture => valuePicture - 1)
        }else{
            setValuePicture(element.img.length - 1)
        }
    }
    
    return (
        <div className='card_home_promotion'>
            <div className="card_home_promotion_inside" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="model">{element.marque}:&nbsp;&nbsp;{element.model}</div>
                <div className='nouveau_promotion_'>
                {element.new && <h3>Nouveau</h3>}
                {element.promo && <span>Promo !</span>}
                </div>
                <img src={require('../../images/' + element.img[0])} alt="clavier"/>
                <div className='cards_home_promotion_inside_price'>
                    <div className='cards_home_promotion_inside_price_inside' >
                        <p>{"Prix: " + element.prix} ???</p><br/>
                        <strong>{element.description}</strong>
                    </div>
                    <div className='cards_home_promotion_inside_price_ajout_panier' id={"panier"+id}>
                        <div className='cards_home_promotion_inside_price_ajout_panier_inside'>
                            <p onClick={addBasket}>Ajouter au panier</p>
                            <div className='quick_full_view'>
                            <Link to={`/${element.instrument}/${element._id}`}>
                                <img src={detail_product} alt="eyes"/>
                            </Link>
                            <img onClick={openModal} src={eyes} alt="eyes"/>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="View product"
                closeTimeoutMS={400}
                openTimeoutMS={400}
                >
                <div className="modal_view_product">
                    <div className="modal_view_product_img">
                        <div onClick={handleSliderPictureDecrease} className="chevron_left"><HiChevronLeft/></div>
                        {element.img && <img src={require(`../../images/${element.img[valuePicture]}`)} alt="logo"/>}
                        <div onClick={handleSliderPictureIncrease} className="chevron_right"><HiChevronRight/></div>
                    </div>
                    <div className="modal_view_product_details">
                        <h2>{element.model}</h2>
                        <div className="modal_view_product_details_product">
                            <p>Marque:  <span>{element.marque}</span></p>
                            <p>Type:  <span>{element.type}</span></p>
                            <p>Categorie:  <span>{element.categorie}</span></p>
                            <p>Fabrication:  <span>{element.fabrique}</span></p>
                            <p>Annee:  <span>{element.annee}</span></p>
                            <p>Nombre de corde:   <span>{element.nb_cordes}</span></p>
                            <p>Orientation:  <span>{element.orientation}</span></p>
                            <p>Poid: <span>{element.poid} kg</span></p>
                            <p>Nombre de frettes:  <span>{element.nb_frettes}</span></p>
                            <p className="modal_prix"><span> {element.prix} ???</span></p>
                            <div className='quantite'>
                                <p>Quantit??: </p>
                                <i onClick={quantiteDecrease}><AiFillMinusCircle/></i>
                                    <input type="number" placeholder='' value={quantiteValue} onChange={null} id="quantite"/>
                                <i onClick={quantiteIncrease}><AiFillPlusCircle/></i>
                            </div>
                            <div className='ajouter_panier_single_instrument'>
                                <div onClick={addBasket}><AjouterPanier/></div>
                            </div>
                        </div>
                    </div>
                    <button onClick={closeModal}>X</button>
                </div>
            </Modal>
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
                {element.img && <img src={require(`../../images/${element.img[0]}`)} alt="logo"/>}
                    <div className="img_details_p">
                        <h3>{element.model}</h3>
                        <div className="marque_categorie">
                            <p>Marque: <span>{element.marque}</span></p>
                            <p>Type: <span>{element.categorie}</span></p>
                        </div>
                        <div className="trait_horizontale"/>
                        <div className="quantite_total">
                            <p>Quantite:  <span>{quantiteValue}</span></p>
                            <p>Total: <span>{quantiteValue * element.prix} ???</span></p>
                        </div>

                    </div>
                </div>
                <div className="nombre_produit_panier">
                    <i><AiOutlineShoppingCart/></i>
                    <h2>IL Y A {userData && userData.panier ? userData.panier.length : ""} PRODUITS DANS VOTRE PANIER.</h2>
                </div>
                <div className="details_panier_inside">
                    <p>Frais de port: <span>{totalPanier > 89 ? "Livraison gratuite !" : "5.99 ???"} </span></p>
                    <p>Total Panier:  <span>{totalPanier} ???</span></p>
                </div>
                <div className="commander_continuer_mes_achats">
                    <button onClick={closeModalProductAdded}>Continuer mes achats</button>
                    <Link to="/panier">Commander</Link>
                </div>
                    <p className="cross_exist" onClick={closeModalProductAdded}>X</p>
                </div>
            </Modal>
            
            
        </div>
    )
}
