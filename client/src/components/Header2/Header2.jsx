import React from 'react';
import "./Header2.css"
import logo from "../../assets/images/journal-better.png";

const Header2 = () => {
    return (
        <div class="header">
            <a href={logo}>
                <img className="logo2" alt="clickonme" src={logo}></img>
            </a>
        </div>
    );
};

export default Header2;