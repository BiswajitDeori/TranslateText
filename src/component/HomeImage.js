
import React from "react";


import Cover from './img/Cover.jpg'
import { Link } from "react-router-dom";


import './HomeImg.css'


export const HomeImg=()=>
{

    return(
        <div className="hero">
            <div className="mask">
                <img src={Cover} className="into-img" alt="backgound-img"/>
            </div>
            <div className="content">
                <p>HI, I am Biswajit.</p>
                <h1>Language Translator Application</h1>
                <div>
                    <Link to="/Content" className="btn">LUNCH</Link>
                </div>
            </div>

        </div>
    )


}




