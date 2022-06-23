import React from 'react';
import ContactForm from './ContactForm';
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Contact extends React.Component {

    render() {
        return (
            <section className="bgContact">
                <div className="row" style={{paddingTop: "20px"}}>
                    <div className="col-md-1"></div>
                    <div className="col-md">
                        <ContactForm />
                    </div>
                </div>
            </section>
        );
    }
}