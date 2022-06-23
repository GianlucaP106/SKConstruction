import React from "react";
import "../styles/Project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselDisplay from "./CarouselDisplay";

export default class Project extends React.Component {

    render() {
        return(
            <section className="projectBg" id="projectSection">
                <div className="row" style={{paddingTop: "0px"}}>
                    <div className="col" style={{textAlign: "center"}}>
                        <h1 className="fontFamily">Projects</h1>
                    </div>
                </div>
                <div className="row" style={{paddingTop: "60px", paddingBottom: "100px"}}>
                    <div className="col-2"></div>
                    <div className="col fixCarouselPosition">
                        <div className="fixCarousel" >
                            <CarouselDisplay />
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </section>
        );
    }
}