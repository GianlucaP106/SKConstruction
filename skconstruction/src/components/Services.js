import React from "react";
import CarouselDisplay from "./CarouselDisplay";

import homeIcon from "../assets/images/homeIcon.png";
import newHouseIcon from "../assets/images/newHouseIcon.png";
import buildingIcon from "../assets/images/buildingIcon.png";

import "../styles/Services.css";

export default class Services extends React.Component {

    render() {
        return (
            <section className="servicesSection">
                <div className="row" style={{"padding-top": "50px"}}>
                    <div className="col-12" style={{"text-align": "center"}}>
                        <h1 className="fontFamily">Services</h1>
                    </div>
                </div>
                <div className="row" style={{"padding-bottom": "100px", "padding-top": "50px"}}>
                    <div className="col-md-4 servicesIconContainer verticalLine">
                        <div>
                            <img src={homeIcon}></img>
                        </div>
                        <div className="servicesTextPad" style={{"text-align": "center", "display": "flex", "justify-content": "center"}}>
                            <p className="fontFamily" style={{"width": "50%"}}>Home rennovations that include bathroom, kitchen, basements, and entire home rennovations, and more</p>
                        </div>
                    </div>
                    <div className="col-md-4 servicesIconContainer verticalLine">
                        <div>
                            <img src={buildingIcon}></img>
                        </div>
                        <div className="servicesTextPad">
                            <p className="fontFamily">Commercial rennovations </p>
                        </div>
                    </div>
                    <div className="col-md-4 servicesIconContainer">
                        <div>
                            <img src={newHouseIcon}></img>
                        </div>
                        <div className="servicesTextPad">
                            <p className="fontFamily">Home building</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}