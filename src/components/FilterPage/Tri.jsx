import React from 'react'

export default function Tri() {
    return (
        <div className="filter_tri">
            <div className="filtre_tri_details">
                <h3>Tri</h3>
                <select name="filtre" id="filtre_select">
                    <option value=""> -- </option>
                    <option value="croissant">Le moins cher</option>
                    <option value="decroissant">Le plus cher</option>
                    <option value="alphabet_croissant">De A à Z</option>
                    <option value="alphabet_decroissant">De Z à A</option>
                </select>
            </div>
            <div className="filtre_montrer_details">
                <h3>Montrer</h3>
                <select name="filtre" id="filtre_select">
                    <option value=""> -- </option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="30">30</option>
                </select>
            </div>
        </div>
    )
}
