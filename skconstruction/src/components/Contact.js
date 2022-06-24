import React from 'react';
import ContactForm from './ContactForm';
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Contact extends React.Component {

    render() {
        return (
            <section className="bgContact">
                <div className="row" style={{paddingTop: "10px", textAlign: "center"}}>
                    <div className="col-2 contactFormNoDisplay"></div>
                    <div className="" id="formHeaderAdjust">
                        <h1 className="fontFamily">Request a quote</h1>
                    </div>
                </div>
                <div className="row" style={{paddingTop: "10px", textAlign: "center"}}>
                    <div className="col-2 contactFormNoDisplay"></div>
                    <div className="" id="formHeaderAdjust">
                        <h3 className="fontFamily">Contact Us</h3>
                    </div>
                </div>
                <div className="row contactFromCenter" style={{paddingTop: "20px"}}>
                    <div className="col-2 contactFromNoDisplay"></div>
                    <div className="col formPadMobile" style={{ paddingRight: "0"}}>
                        <ContactForm />
                    </div>
                </div>
            </section>
        );
    }
}