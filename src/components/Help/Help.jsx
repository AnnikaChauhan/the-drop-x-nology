import React, { Component } from "react";
import styles from "./Help.module.scss";
import Header from "../Utility/Header";

export default class Help extends Component {
    render() {
        return  (
            <section>
                <Header title={"Help"} subtitle= {"Contact Us"} />
                <p>Get in touch with any questions, queries or ideas you have about The Drop.</p>
                <p>We would love to hear from you!</p>
                <p>Email us at: <a href="mailto:team@getthedrop.co.uk">team@getthedrop.co.uk</a></p>
            </section>
        )
    }
}