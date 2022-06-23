import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import CarouselDisplay from "./CarouselDisplay";

export default class Project extends React.Component {

    render() {
        return(
            <section id="projectSection">
                <div className="row" style={{"padding-top": "60px"}}>
                    <div className="col" style={{"text-align": "center"}}>
                        <h1 className="fontFamily">Projects</h1>
                    </div>
                </div>
                <div className="row" style={{"padding-top": "60px", "padding-bottom": "100px"}}>
                    <div className="col-2"></div>
                    <div className="col">
                        <CarouselDisplay />
                    </div>
                    <div className="col-2"></div>
                </div>
            </section>
        );
    }
}