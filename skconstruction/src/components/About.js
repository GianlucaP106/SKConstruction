import React from "react";
import DisplayCard from "./DisplayCard";
import CarouselDisplay from "./CarouselDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";


export default class About extends React.Component {

    render() {
        return (
            <section className="bgAbout" id="aboutSection">
                <div className="row" style={{"padding-top": "0", "height": "75px"}}>
                    <div className="col-6">
                        <div className="quoteCardPosition">
                            <DisplayCard isProject={false} isQuote={true} isContact={false} width={"366px"} height={"351px"} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{"padding-top": "0", "padding-bottom": "100px"}}>
                    <div className="col-6">
                        <div style={{"margin-left": ""}}>
                            <CarouselDisplay className=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <h1>About Us</h1>
                        <p>hello</p>
                    </div>
                </div>
            </section>
        );
    }
}