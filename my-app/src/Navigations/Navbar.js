import React from "react";

import './Navbar.css';

const Navbar = () =>{
    return(
        <div className="Navbar">
            <div className="Container">
                <div className="logo">
                    <h2><span>Logo</span> Here</h2>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="get_btn">
                    <div className="btn">
                        <a href="#contact">Get a Quote</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Navbar;