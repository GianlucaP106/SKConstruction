import React from "react";

import NaviBar from "./NaviBar";
import HomeSection from "./HomeSection";
import GrayDiv from "./GrayDiv";
import About from "./About";
import Services from "./Services";
import Project from "./Project";
import TransitionComponent from "./TransitionComponent";
import Contact from "./Contact";
import FooterBar from "./FooterBar";

import "bootstrap/dist/css/bootstrap.min.css";

export default class MainPage extends React.Component {

    render() {
        return (
            <div>
                <NaviBar />
                {/* <div style={{"background-color": "#999999", "height": "50px", "text-align": "center"}}></div> */}
                <GrayDiv />
                <HomeSection />
                <About />
                <Services />
                <Project />
                <FooterBar />
            </div>
        );
    }
}
