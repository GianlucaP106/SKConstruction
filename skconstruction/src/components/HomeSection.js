import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomeSection.css";
import DisplayCard from "./DisplayCard";

export default class HomeSection extends React.Component {

    render() {
        return (
            <section className="bgImg" id="homeSection">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-md-4 center mobilePadCard">
                        <DisplayCard className="theMargin" isProject={true} isContact={false}/>
                    </div>
                    <div className="col-md-4 center mobilePadCard">
                        <DisplayCard isProject={false} isContact={true}/>
                    </div>
                </div>
                <div className="row" style={{paddingTop: "200px", paddingBottom: "0px"}}>
                    <div className="col quoteCardContainer">
                        <div id="quoteCardPosition">
                            <DisplayCard isProject={false} isQuote={true} isContact={false} />
                        </div>
                    </div>
                </div>
            </section>
        );
         
    }
}