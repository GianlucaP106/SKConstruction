import React from "react";
import DisplayCard from "./DisplayCard";
import CarouselDisplay from "./CarouselDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";


export default class About extends React.Component {

    render() {
        return (
            <section className="bgAbout" id="aboutSection">
                
                <div className="row" style={{paddingTop: "50px", paddingBottom: "100px"}}>
                    <div className="col-md-6">
                        <div>
                            <CarouselDisplay className=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1>About Us</h1>
                        <p>hello</p>
                    </div>
                </div>
            </section>
        );
    }
}