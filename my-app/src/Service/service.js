import React from "react";
import "./service.css";


const myservice = () => {
    return(
        <div id="service" className="Serv-sec">
            <div className="serv-box">
                <h1 className="serv-head">Our Services</h1>
            </div>
            <div className="service-boxes">
                <div className="box1">
                    <img src="https://www.onsip.com/hs-fs/hubfs/Managing%20Employees%20On%20a%20Remote%20Basis%20Building%20Team%20Unity%20Featured%20Image%20(iStock-515594438).jpg?width=3558&name=Managing%20Employees%20On%20a%20Remote%20Basis%20Building%20Team%20Unity%20Featured%20Image%20(iStock-515594438).jpg"></img>
                    <h3>UI / UX design</h3>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
                <div className="box1">
                    <img src="https://www.actcredit.com/wp-content/uploads/Who-we-are.jpg"></img>
                    <h3>Website Development</h3>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
                <div className="box1">
                    <img src="https://www.mncaviation.aero/govojej/2018/11/blog.jpg"></img>
                    <h3>Seo Marketing</h3>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
            </div>
        </div>
    );
}


export default myservice;