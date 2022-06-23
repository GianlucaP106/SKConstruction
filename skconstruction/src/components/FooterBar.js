import React from 'react';
import "../styles/FooterBar.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function FooterBar() {
    return(
        <div>
            <div className="footerBar centerFooter footerPad">
                <a href="#" className="footerLinkFix"><h5>Home</h5></a>
                <a href="#" className="footerLinkFix"><h5>About</h5></a>
                <a href="#" className="footerLinkFix"><h5>Services</h5></a>
                <a href="#" className="footerLinkFix"><h5>Projects</h5></a>
                <a href="#" className="footerLinkFix"><h5>Contact Us</h5></a>
            </div>
        </div>
    );
}