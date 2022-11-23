import React from 'react'

export default function Prix() {

    return (
        <div className="prix_filter">
            <h2>Prix</h2>
            <div className="prix_filter_max_min">
            <input type="number" id="min" name="min" defaultValue={0} min={0}/>
            <p>€</p>
            <p>à</p>
            <input type="number" id="max" name="max" defaultValue={20000} max={20000}/>
            <p> € </p>
            </div>

        </div>
    )
}
