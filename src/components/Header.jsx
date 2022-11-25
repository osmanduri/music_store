import React, { useState } from 'react'
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

import { NavLink } from 'react-router-dom'

export default function Header() {
    const [searchActive, setSearchActive] = useState(false)
    const [eyeVisible, setEyeVisible] = useState(false)
    const [switchConnect, setSwitchConnect] = useState({
        connect:true,
        create_account:false,
        password_reset:false
    })

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
                    <NavLink to="#" className="hover" ><span onClick={handleShowConnexion}>Se connecter</span></NavLink>
                    <div className="connexion active" id="connexion">
                    <form type="submit" className="active" id="form">

                                   { switchConnect.connect && <>
                                        <label>Email</label>
                                        <input type="text"/>

                                        <label>Mot de passe</label>
                                        <div className="mot_de_passe">
                                            <input type={eyeVisible ? "password" : "text"}/>
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
                                        <span><button type="submit" onClick={() => handleSwitchConnectCreatePasswordReset("create_account")}>Créer un compte</button></span>
                                        <p>Mot de passe oublié ?</p>
                                    </>
                                    }
                                    {
                                        switchConnect.create_account && 
                                        <div className="create_account">
                                            <label>Titre</label>
                                            <div className="civilite">
                                                <input type="checkbox"/>
                                                <p>Mr.</p>
                                                <input type="checkbox"/>
                                                <p>Mr.</p> 
                                            </div>
                                            <div className="create_account_input">
                                                <label>Prénom</label>
                                                <input type="text"/>
                                            </div>
                                            <div className="create_account_input">
                                                <label>Nom</label>
                                                <input type="text"/>
                                            </div>
                                            <div className="create_account_input">
                                                <label>Email</label>
                                                <input type="text"/>
                                            </div>
                                            <div className="create_account_input">
                                                <label>Mot de passe</label>
                                                <input type="text"/>
                                            </div>

                                        </div>
                                    }
                                    {
                                        switchConnect.password_reset &&
                                        <div className="password_reset" id="password_reset">
                                            <p onClick={() => handleSwitchConnectCreatePasswordReset('connect')}>Password Reset !</p>
                                        </div>
                                    }
                    </form>
                    </div>
                    <div className="trait_header"></div>
                    <i>
                        <AiOutlineShoppingCart/>
                        <p>1</p>
                    </i>
                </div> 
            </div>
        </div>
    )
}
