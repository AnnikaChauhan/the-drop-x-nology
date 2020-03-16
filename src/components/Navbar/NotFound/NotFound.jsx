import React, { Component } from "react";
import styles from "./NotFound.module.scss";
import errorLogo from "../../../static/images/404-white.png";

export default class NotFound extends Component {
    render() {
        return (
            <div className={styles.NotFound}>
                <img src={errorLogo} alt={"Error 404:"} />
                <p>Oops! That page can not be found.</p>
            </div>
        );
    }
}
