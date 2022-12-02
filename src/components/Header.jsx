import React, { useState, useContext, useRef, useEffect } from 'react'
import { UserContext } from '../userContext'
import Cookies from 'universal-cookie'
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { CgFacebook } from "@react-icons/all-files/cg/CgFacebook";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { HiPhone } from "@react-icons/all-files/hi/HiPhone";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";
import { AiFillEyeInvisible } from "@react-icons/all-files/ai/AiFillEyeInvisible";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [searchActive, setSearchActive] = useState(false)
    const [eyeVisible, setEyeVisible] = useState(true)
    const [switchConnect, setSwitchConnect] = useState({
        
        connect:true,
        create_account:false,
        password_reset:false
    })

    const {userData, setUserData} = useContext(UserContext);
    const cookies = new Cookies();
    const [errorPassword, setErrorPassword] = useState('')
    
    const login = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const prenom = useRef(null)
    const nom = useRef(null)
    const email = useRef(null)
    



    useEffect(() =>{
        const data = localStorage.getItem('storage-userData');
        if(data){
            setUserData(JSON.parse(data))
        }else{
            setUserData(null)
        }

    },[])

    const handleLogin = async (e) => {
        e.preventDefault()
        setErrorPassword('')
        const payload = {
            email: login.current.value,
            password: password.current.value
        }
        console.log(payload)
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/login` , payload)
        .then((res) => {
            if(res.data.message){
                setErrorPassword(res.data.message)
                console.log(res.data.message)
            }else{
                const form = document.getElementById('form')
                const connexion = document.getElementById('connexion')
                //console.log(res.data)
                //cookies.set('my_token', res.data.token, { path: '/'})
                //const user = {...res.data}
                //delete user["token"];
                
                localStorage.setItem('storage-userData', JSON.stringify(res.data))
                setUserData(res.data)
                //console.log(cookies.get('my_token'))
                form.classList.add('active')
                connexion.classList.add('active')
            }
        })
        .catch((err) => {
            console.log(err)
            
        })
    }

    const handleDisconnect = async () =>{
        localStorage.removeItem('storage-userData');
        cookies.remove("jwt")
        setUserData([])
        //window.location.reload()
        window.location.href = "/"
    } 

    const handleActiveSearch = () => {
        setSearchActive(!searchActive)
        console.log(searchActive);
    }

    const handleShowConnexion = () => {
        const connexion = document.getElementById('connexion')
        const form = document.getElementById('form')

        connexion.classList.toggle('active')
        form.classList.toggle('active')
    }

    const handleShowEye = () => {
        setEyeVisible(!eyeVisible)
    }

    const handleSwitchConnectCreatePasswordReset = (choix) => {
        setSwitchConnect({
            connect: false,
            create_account: true,
            password_reset: false
        })

        switch(choix){
            case "connect":
                setSwitchConnect({
                    connect: true,
                    create_account: false,
                    password_reset: false
                })
            break;

            case "create_account":
                setSwitchConnect({
                    connect: false,
                    create_account: true,
                    password_reset: false
                })
            break;

            case "password_reset":
                setSwitchConnect({
                    connect: false,
                    create_account: false,
                    password_reset: true
                })
            break;
        }
    }

    const handleAccountCreation = () => {
        if(nom.current.value && prenom.current.value && email.current.value && password.current.value && confirmPassword.current.value)
        {
            if(isEmail(email.current.value)){
                const email_id = document.getElementById('email_creation')
                email_id.style.borderColor = "#535558";

                const erreur_email_creation = document.getElementById('erreur_email_creation')
                erreur_email_creation.style.display = "none"
            if(password.current.value !== confirmPassword.current.value){
                const erreur_account_creation = document.getElementById('erreur_account_creation')
                erreur_account_creation.innerHTML = "Les mots de passe ne correspondent pas !"
                erreur_account_creation.style.color = "red"
            }else{
                const payload = {
                    nom: nom.current.value,
                    prenom: prenom.current.value,
                    email: email.current.value,
                    password: password.current.value
                }
                axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/add`, payload)
                .then((res) => {
                    if(res.data){
                        const erreur_account_creation = document.getElementById('erreur_account_creation')
                        erreur_account_creation.innerHTML = "Compte crée avec succès !"
                        erreur_account_creation.style.color = "green"
                        
                        nom.current.value = ""
                        prenom.current.value = ""
                        email.current.value = ""
                        password.current.value = ""
                        confirmPassword.current.value = ""
                    }
                })
                .catch((err) => {
                    console.log(err.response)
                })
            }

            }else{
                const email_id = document.getElementById('email_creation')
                email_id.style.borderColor = "red";

                const erreur_email_creation = document.getElementById('erreur_email_creation')
                erreur_email_creation.style.display = "block"

                const erreur_account_creation = document.getElementById('erreur_account_creation')
                erreur_account_creation.innerHTML = ""
                erreur_account_creation.style.color = "green"
            }

        }else{
            const erreur_account_creation = document.getElementById('erreur_account_creation')
            erreur_account_creation.innerHTML = "Veuillez remplir tout les champs"
            erreur_account_creation.style.color = "red"
        }
    }
    return (
        <div className="header">
            <div className="header_inside container_header">
                <div className="header_info_left">
                    <div className='header_email'><a href="mailto:music_store@gmail.com">music_store@gmail.com</a></div>
                    <div className="trait_header"></div>
                    <i onClick={handleActiveSearch}><BsSearch/></i>
                    <div className={searchActive ? "searchActive" : "search"}>
                        <div className='search_active_inside'>
                            <select>
                            <option value="aze" selected disabled hidden>Toutes Categories</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            </select>
                            
                            <input type="text" placeholder='Recherche'/>
                        </div>

                    </div>
                    <div className="trait_header"></div>
                    <div className='header_social_media'>
                    <a href="www.facebook.com"><CgFacebook/></a><a href="www.facebook.com"><AiOutlineInstagram/></a><a href="www.facebook.com"><AiOutlineTwitter/></a><a href="www.facebook.com"><AiFillYoutube/></a>
                    </div>
                </div>
                <div className='center_text_defile'>
                    <p className='txt t1'>Ouvert toute la semaine du Lundi au Dimanche de 8h à 20h ! Vous pouvez nous joindre au 0627928252 !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p className='txt t1'>Ouvert toute la semaine du Lundi au Dimanche de 8h à 20h ! Vous pouvez nous joindre au 0627928252 !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    
                </div>
                
                <div className="header_info_right">
                    {
                                       
                                       !userData ?
                                        (
                                            <div  className="header_info_right_connexion" >
                                                <span onClick={handleShowConnexion}>Se connecter</span>
                                            </div>
                                        )
                                        :
                                        (
                                            <div  className="header_info_right_connexion" >
                                                <div className="prenom">Bienvenue {userData.prenom}</div>
                                                <span onClick={handleDisconnect}>Deconnexion</span>
                                            </div>
                                        )

                                        
                    }

                    <div className="connexion active" id="connexion">
                    <form type="submit" className="active" id="form" onSubmit={handleLogin}>

                                   { switchConnect.connect && 
                                   <div className="connect">
                                       <strong>Connexion</strong>
                                        <label>Email</label>
                                        <input type="text" ref={login} required/>

                                        <label>Mot de passe</label>
                                        <div className="mot_de_passe">
                                            <input type={eyeVisible ? "password" : "text"} ref={password} required/>
                                            <i onClick={handleShowEye}>
                                                {
                                                    eyeVisible ? <AiFillEye/> : <AiFillEyeInvisible/>
                                                }
                                                
                                            </i>
                                        </div>
                                        <div className="btn-connexion">
                                        <i><AiFillLock/></i>
                                        <button type="submit">Se Connecter</button>
                                        </div>
                                        <span><p type="submit" onClick={() => handleSwitchConnectCreatePasswordReset("create_account")}>Créer un compte</p></span>
                                        <p onClick={() => handleSwitchConnectCreatePasswordReset('password_reset')}>Mot de passe oublié ?</p>
                                    </div>
                                    }
                                    {
                                        switchConnect.create_account && 
                                        <div className="create_account">
                                            <strong>Creation de compte</strong>
                                            <div className="create_account_input">
                                                <label>Prénom</label>
                                                <input type="text" ref={prenom} />
                                            </div>
                                            <div className="create_account_input">
                                                <label>Nom</label>
                                                <input type="text" ref={nom} />
                                            </div>
                                            <div className="create_account_input">
                                                <label>Email</label>
                                                <input type="text" ref={email} id="email_creation"/>
                                                <p className="erreur_email_creation_compte" id="erreur_email_creation">Format du mail invalide</p>
                                            </div>
                                            <div className="mot_de_passe">
                                            <label>Mot de passe</label>
                                            <input type={eyeVisible ? "password" : "text"} ref={password}/>
                                            <i onClick={handleShowEye}>
                                                {
                                                    eyeVisible ? <AiFillEye/> : <AiFillEyeInvisible/>
                                                }
                                                
                                            </i>
                                            </div>
                                            <div className="mot_de_passe">
                                            <label>Confirmation du mot de passe</label>
                                            <input type={eyeVisible ? "password" : "text"} ref={confirmPassword}/>
                                            <i onClick={handleShowEye}>
                                                {
                                                    eyeVisible ? <AiFillEye/> : <AiFillEyeInvisible/>
                                                }
                                                
                                            </i>
                                            </div>
                                            <div className="connect_or_create_account">
                                            <span onClick={handleAccountCreation}>Enregistrer</span>
                                            <span onClick={() => handleSwitchConnectCreatePasswordReset('connect')}>Se Connecter</span>
                                            <p className="erreur_message_account_creation" id="erreur_account_creation"></p>
                                            </div>
                                            

                                        </div>
                                    }
                                    {
                                        switchConnect.password_reset &&
                                        <div className="password_reset" id="password_reset">
                                            <strong>Mot de passe oublié</strong>
                                            <p>Veuillez entrer l'adresse e-mail que vous avez utilisé pour vous inscrire. Nous vous enverrons nouveau lien pour reinitialiser votre mot de passe.</p>
                                            <div className="password_reset_email">
                                                <label>Adresse Email</label>
                                                <input type="text"/>
                                            </div>
                                            <div className="password_reset_email">
                                                <label>Confirmation Adresse Email</label>
                                                <input type="text"/>
                                            </div>
                                            <div className="password_reset_create_connect">
                                                <span onClick={() => handleSwitchConnectCreatePasswordReset('connect')}>Se Connecter</span>
                                                <span><p type="submit" onClick={() => handleSwitchConnectCreatePasswordReset("create_account")}>Créer un compte</p></span>
                                            </div>

                                        </div>
                                    }
                    </form>
                    </div>
                    <div className="trait_header"></div>
                    <Link to="/panier" className="panier_header">
                        <AiOutlineShoppingCart/>
                        <p>{userData && userData.panier ? userData.panier.length : ""}</p>
                    </Link>
                </div> 
            </div>
        </div>
    )
}
