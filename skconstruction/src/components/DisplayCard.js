import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DisplayCard.css"
import arrow from "../assets/images/arrow.png";

function DisplayCard(props) {
    return (
        <div className="cardBgColor makeRound centerContainer boxShadow" style={{"height": props.height, "width": props.width}}>
            <div className={props.isProject ? "" : "noDisplay"}>
                <h3 className={"centerChild text-white fontFamily font-weight-bold"}>Projects</h3>
            </div>
            <div className={props.isQuote ? "" : "noDisplay"}>
                <h3 className="text-white contactUs fontSizeBig fontFamily font-weight-bold">Contact Us</h3>
                <p className="text-white someMargin fontSizeSmall fontFamily">Request a quote <br/>for your next <br/>project today!</p>
            </div>
            <img className="arrowPosition" src={arrow} width="50" alt="alt"/>
        </div>
    );
}

export default DisplayCard;
