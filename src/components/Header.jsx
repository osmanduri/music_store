import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { CgFacebook } from "@react-icons/all-files/cg/CgFacebook";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { HiPhone } from "@react-icons/all-files/hi/HiPhone";

import { NavLink } from 'react-router-dom'

export default function Header() {
    const [searchActive, setSearchActive] = useState(false)

    const handleActiveSearch = () => {
        setSearchActive(!searchActive)
        console.log(searchActive);
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
                    <NavLink to="/connexion" exact activeClassName="header-active" className="hover"><span>Se connecter</span></NavLink>
                    <div className="trait_header"></div>
                    <i><AiOutlineShoppingCart/></i>
                </div> 
            </div>
        </div>
    )
}
