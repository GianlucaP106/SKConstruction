import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomeSection.css";
import DisplayCard from "./DisplayCard";

export default class HomeSection extends React.Component {

    render() {
        return (
            <section className="bgImg">
                
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-md-4 center">
                        <DisplayCard className="theMargin"height={"198px"} width={"366px"} isProject={true} isQuote={false}/>
                    </div>
                    <div className="col-md-4 center">
                        <DisplayCard height={"198px"} width={"366px"} isProject={false} isQuote={true}/>
                    </div>
                </div>
            </section>
        );
        
    }
}