import React from 'react';
import logo from "../../assets/images/journal-better.png"
import "./Header.css"
const Header = () => {
    return (
        <div>
            <div className="card-header text-muted" id="header">
                <a href={logo}>
                    <img
                        src={logo}
                        className="logo"
                        alt="logo"
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;