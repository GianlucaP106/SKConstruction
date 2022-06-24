import React from 'react';
import Contact from "./Contact";
import FooterBar from "./FooterBar";
import NaviBar from "./NaviBar";

export default class ContactPage extends React.Component {

    render() {
        return(
            <section>
                <NaviBar />
                <Contact />
                <FooterBar />
            </section>
        );
    }
}