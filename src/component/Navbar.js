import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css'


export const Navbar=()=>
{
    return (

        <div className="header">
                <h1>Translator</h1>
            <ul className="nav-menu">
                <li>
                    <Link to='/Home'>Home</Link> 
                </li>
                <li>
                    <Link to='/Content'>Content</Link> 
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
        </div>

    )

}