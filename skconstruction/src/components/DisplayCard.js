import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DisplayCard.css"
import arrow from "../assets/images/arrow.png";


function DisplayCard(props) {
    
    function checkShadow(quote, contact, project) {
        if (project || contact) return "boxShadow displayCardBlockShadow";
        if (quote) return "boxShadow2";
    }
    function checkSize(quote, contact, project) {
        if (project || contact) return "boxSize1";
        if (quote) return "boxSize2";
    }
    return (
        <div className={"cardBgColor makeRound centerContainer " + checkShadow(props.isQuote, props.isContact, props.isProject) + " " + checkSize(props.isQuote, props.isContact, props.isProject)}>
            <div className={props.isProject ? "" : "noDisplay"}>
                <h3 className={"centerChild text-white fontSizeBig fontFamily font-weight-bold"}>Projects</h3>
            </div>
            <div className={props.isProject ? "" : "noDisplay"}>
                <a href="#projectSection"><img className="arrowPosition" src={arrow} width="50" alt="alt"/></a>
            </div>

            <div className={props.isContact ? "" : "noDisplay"}>
                <h3 className="text-white contactUs fontSizeBig fontFamily font-weight-bold">Contact Us</h3>
                <p className="text-white someMargin fontSizeSmall fontFamily">Request a quote <br/>for your next <br/>project today!</p>
            </div>
            <div className={props.isContact ? "" : "noDisplay"}>
                <Link to="/contact">
                    <img className="arrowPosition" src={arrow} width="50" alt="alt"/>
                </Link>
            </div> 

            <div className={(props.isQuote ? "" : "noDisplay") + " cardPadTopResp"} style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                <p className="text-white someMargin fontSizeXSmall fontFamily" >SK Construction specializes in home rennovations, home extensions, commercial rennovations and more!</p>
            </div>
            <div className={props.isQuote ? "" : "noDisplay"}>
                <Link to="/contact">
                <Button variant="secondary buttonFix boxShadow1 onHoverButton" size="lg">
                    Request a quote!
                </Button>
                </Link>
            </div> 
        </div>
    );
}

export default DisplayCard;
