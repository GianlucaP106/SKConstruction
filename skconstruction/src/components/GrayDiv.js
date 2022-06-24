import React from "react";
import "../styles/GrayDiv.css";

function GrayDiv(props) {
    return (
        <div>
            <div className="inlineDisplay" style={{height: "50px", backgroundColor: "#D9D9D9", alignItems: "center"}}>
                <div style={{width: "100%",display: "flex", justifyContent: "flex-start"}}>
                    <div className="skFormat skCenterText">
                        <h4 className="skFontSize fontFamily" style={{marginLeft: "20px", marginBottom: "0"}}>Sergio Kassabian</h4>
                    </div>
                    <div className="skCenterText">
                        <h4 className="skFontSize fontFamily" style={{marginBottom: "0"}}>General Contractor</h4>
                    </div>
                </div>
                <div style={{width: "100%",display: "flex", justifyContent: "flex-end"}}>
                    <h4 className="skFontSize fontFamily" style={{marginRight: "20px", marginBottom: "0"}}>RBQ: 5800-1322-01</h4>
                </div>
            </div>
            <div className="centerContainer" style={{backgroundColor: "#999999", "height": "0px", textAlign: "center", paddingBottom: "20px"}}>
                <h2 className="centerChild2 fontFamily text-weight-bold responsiveFix">Turn your new home, into your dream home.</h2>
            </div>
        </div>
    );
}

export default GrayDiv;