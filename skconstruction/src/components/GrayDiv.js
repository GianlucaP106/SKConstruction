import React from "react";
import "../styles/GrayDiv.css";

function GrayDiv() {
    return (
        <div>
            <div className="inlineDisplay" style={{"height": "50px", "background-color": "#D9D9D9", "align-items": "center"}}>
                <div style={{"width": "100%","display": "flex", "justify-content": "flex-start"}}>
                    <div style={{"border-right": "2px solid black", "margin-right": "25px", "padding-right": "25px"}}>
                        <h4 style={{"margin-left": "20px"}}>Sergio Kassabian</h4>
                    </div>
                    <div>
                        <h4>General Contractor</h4>
                    </div>
                </div>
                <div style={{"width": "100%","display": "flex", "justify-content": "flex-end"}}>
                    <h4 style={{"margin-right": "20px"}}>RBQ: 5800-1322-01</h4>
                </div>
            </div>
            <div className="centerContainer" style={{"background-color": "#999999", "height": "0px", "text-align": "center", "padding-bottom": "20px"}}>
                <h2 className="centerChild2 fontFamily text-weight-bold">Turn your new home, into your <br/> dream home.</h2>
            </div>
        </div>
    );
}

export default GrayDiv;