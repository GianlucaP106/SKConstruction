import React from "react";


import homeIcon from "../assets/images/homeIcon.png";
import newHouseIcon from "../assets/images/newHouseIcon.png";
import buildingIcon from "../assets/images/buildingIcon.png";

import "../styles/Services.css";

export default class Services extends React.Component {

    render() {
        return (
            <section className="servicesSection" id="servicesSection">
                <div className="row" style={{paddingTop: "50px"}}>
                    <div className="col-12" style={{textAlign: "center"}}>
                        <h1 className="fontFamily">Services</h1>
                    </div>
                </div>
                <div className="row servicesCenter" style={{paddingTop: "50px"}}>
                    <div className="col-md-4 servicesIconContainer servicesLine mobileServicesPad servicesWidth">
                        <div>
                            <img src={homeIcon} alt=" home icon construction"></img>
                        </div>
                        <div className="servicesTextPad" style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
                            <p className="fontFamily homeRenoTextFix" >Home rennovations that include bathroom, kitchen, basements, and entire home rennovations, and more</p>
                        </div>
                    </div>
                    <div className="col-md-4 servicesIconContainer servicesLine mobileServicesPad servicesWidth">
                        <div>
                            <img src={buildingIcon} alt="building icon construction"></img>
                        </div>
                        <div className="servicesTextPad">
                            <p className="fontFamily">Commercial rennovations </p>
                        </div>
                    </div>
                    <div className="col-md-4 servicesIconContainer mobileServicesPad">
                        <div>
                            <img src={newHouseIcon} alt="house icon construction"></img>
                        </div>
                        <div className="servicesTextPad">
                            <p className="fontFamily">Home building</p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{paddingBottom: "100px" }}>
                    <div className="col quoteBlockButtonCenter">
                        
                            <button className="quoteBlockButton quoteBlockShadow"><p className="servicesFontSize fontFamily">Trust us with you next project request a quote today!</p></button>
                        
                    </div>
                </div>
            </section>
        );
    }
}