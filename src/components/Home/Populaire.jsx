import React, { useEffect, useState } from 'react'
import CardsHomePromotion from './CardsHomePromotion';
import product from '../../data/cards_home_promotion'

export default function Populaire() {
    const [name, setName] = useState('Populaire')

    const style = {

    }

    useEffect(() => {
        switch(name){
            case 'Populaire':
                document.getElementById('populaire').style.color = "white";
                document.getElementById('nouveaute').style.color = "#8a8a8a";
                document.getElementById('promotion').style.color = "#8a8a8a";
                break;
            case 'Nouveautés':
                document.getElementById('populaire').style.color = "#8a8a8a";
                document.getElementById('nouveaute').style.color = "white";
                document.getElementById('promotion').style.color = "#8a8a8a";
                break;
            case 'Promotions':
                document.getElementById('populaire').style.color = "#8a8a8a";
                document.getElementById('nouveaute').style.color = "#8a8a8a";
                document.getElementById('promotion').style.color = "white";
                break;
            
        }

    }, [])

    const handleChangeName = (e) => {
        setName(e.target.innerHTML)

        switch(e.target.innerHTML){
            case 'Populaire':
                document.getElementById('populaire').style.color = "white";
                document.getElementById('nouveaute').style.color = "#8a8a8a";
                document.getElementById('promotion').style.color = "#8a8a8a";
                break;
            case 'Nouveautés':
                document.getElementById('populaire').style.color = "#8a8a8a";
                document.getElementById('nouveaute').style.color = "white";
                document.getElementById('promotion').style.color = "#8a8a8a";
                break;
            case 'Promotions':
                document.getElementById('populaire').style.color = "#8a8a8a";
                document.getElementById('nouveaute').style.color = "#8a8a8a";
                document.getElementById('promotion').style.color = "white";
                break;

        }
    }

    const handleOnMouseEnter = (e) => {
        const id = document.getElementById(e.target.id)



        id.style.color = "#8a8a8a" ? "white" : "#8a8a8a"
    }

    const handleMouseLeave = (e) => {
        const id = document.getElementById(e.target.id)

        if(name !== e.target.innerHTML){
            id.style.color = "#8a8a8a"
        }

        
        
    }
    return (
        <div className='populaire container_header'>
            <div className='populaire_inside'>
                <h1>{name}</h1>
                <div className='populaire_new_prom'>
                    <p id="populaire" onClick={handleChangeName} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleMouseLeave}>Populaire</p>
                    <p id="nouveaute" onClick={handleChangeName} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleMouseLeave}>Nouveautés</p>
                    <p id="promotion" onClick={handleChangeName} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleMouseLeave}>Promotions</p>
                </div>
            </div>
            <div className='cards_home_promotion_outside'>
                
                {
                    product.map((e, index) => {
                        return (
                            <CardsHomePromotion element={e} key={index} id={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
