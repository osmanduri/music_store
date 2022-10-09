import React from 'react'


export default function CardsHomeCat({element}) {
    return (
        <div className='cards_home'>
            <div className='cards_home_inside'>
                <div className='cards_home_single'>
                <img src={require('../images/cards_home/' + element.img)} alt="logo"/>
                <h1>{element.title}</h1>
                </div>
            </div>
        </div>
    )
}
