import React from "react";
import "./contact.css";


const contact = () =>{
    return(
        <div id="contact" className="contact-us">
            <div className="contact-head">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-form">
                <form action="">
                    <div className="contact-inputs">
                        <div className="myinput">
                            <input type="name" placeholder="Enter Your Full Name"></input>
                        </div>
                        <div className="myinput">
                            <input type="email" placeholder="Enter Your Email Address"></input>
                        </div>
                        <div className="myinput">
                            <input type="tel" placeholder="Enter Your Phone Number"></input>
                        </div>
                    </div>
                    <div className="contact-text">
                        <div className="comment">
                            <textarea placeholder="Leave a Comment" rows={7}></textarea>
                        </div>
                    </div>
                    <div className="contact-btn">
                            <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="copyright">
                <h1>© Copyright 2023 Muhammad Hamza. All Right Reserved</h1>
            </div>
        </div>
    );
}

export default contact;