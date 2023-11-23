import React from "react";
import "./portfolio.css";


const portfolio = () =>{
    return(
        <div id="portfolio" className="port-sec">
            <div className="port-head">
                <h1>Our Portfolio</h1>
            </div>
            <div className="gallery">
                <div className="my-gallery">
                    <img src="https://sblaw.vn/wp-content/uploads/2018/06/Establishment-of-Representative-Office-of-foreign-trader-in-Hanoi-City-internet.jpg"></img>
                </div>
                <div className="my-gallery">
                    <img src="https://www.manas.com.tr/video/kapak.jpg"></img>
                </div>
                <div className="my-gallery">
                    <img src="https://leader-id.storage.yandexcloud.net/upload/1371030/d9a6f208-b8b6-44d7-bcc1-5068342ffdd3.jpg"></img>
                </div>
                <div className="my-gallery">
                    <img src="https://money-gate.com/wp-content/uploads/2021/01/p15.jpg"></img>
                </div>
                <div className="my-gallery">
                    <img src="https://www.e-spincorp.com/wp-content/uploads/2017/12/cyber-bi.jpg"></img>
                </div>
                <div className="my-gallery">
                    <img src="https://governmentbusiness.co.uk/sites/default/files/adobestock_226785898_cover_11.jpg"></img>
                </div>
            </div>
        </div>
    );
}

export default portfolio;