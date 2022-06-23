import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DisplayCard.css"
import arrow from "../assets/images/arrow.png";


function DisplayCard(props) {
    
    function checkShadow(quote, contact, project) {
        if (project || contact) return "boxShadow";
        if (quote) return "boxShadow2";
    }
    return (
        <div className={"cardBgColor makeRound centerContainer " + checkShadow(props.isQuote, props.isContact, props.isProject)} style={{"height": props.height, "width": props.width}}>
            <div className={props.isProject ? "" : "noDisplay"}>
                <h3 className={"centerChild text-white fontFamily font-weight-bold"}>Projects</h3>
            </div>
            <div className={props.isProject ? "" : "noDisplay"}>
                <a href="#aboutSection"><img className="arrowPosition" src={arrow} width="50" alt="alt"/></a>
            </div>

            <div className={props.isContact ? "" : "noDisplay"}>
                <h3 className="text-white contactUs fontSizeBig fontFamily font-weight-bold">Contact Us</h3>
                <p className="text-white someMargin fontSizeSmall fontFamily">Request a quote <br/>for your next <br/>project today!</p>
            </div>
            <div className={props.isContact ? "" : "noDisplay"}>
                <a href="#"><img className="arrowPosition" src={arrow} width="50" alt="alt"/></a>
            </div> 

            <div className={props.isQuote ? "" : "noDisplay"} style={{"padding-top": "70px", "padding-bottom": "20px", "padding-left": "20px", "padding-right": "20px"}}>
                <p className="text-white someMargin fontSizeXSmall fontFamily" >SK Construction specializes in home rennovations, home extensions, commercial rennovations and more!</p>
            </div>
            <div className={props.isQuote ? "" : "noDisplay"}>
                <Button href="#homeSection" variant="secondary buttonFix boxShadow1 onHoverButton" size="lg">
                    Request a quote!
                </Button>
            </div> 
        </div>
    );
}

export default DisplayCard;
