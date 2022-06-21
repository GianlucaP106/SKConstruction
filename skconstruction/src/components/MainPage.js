import React from "react";
import NaviBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NaviBar />
            </div>
        );
    }
}
