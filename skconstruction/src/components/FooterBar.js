import React from 'react';
import { Link } from "react-router-dom";
import "../styles/FooterBar.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function FooterBar() {
    return(
        <div>
            <div className="footerBar centerFooter footerPad">
                <a href="homeSection" className="footerLinkFix"><h5>Home</h5></a>
                <a href="aboutSection" className="footerLinkFix"><h5>About</h5></a>
                <a href="servicesSection" className="footerLinkFix"><h5>Services</h5></a>
                <a href="projectSection" className="footerLinkFix"><h5>Projects</h5></a>
                <Link to="/contact" className="footerLinkFix"><h5>Contact Us</h5></Link>
            </div>
        </div>
    );
}