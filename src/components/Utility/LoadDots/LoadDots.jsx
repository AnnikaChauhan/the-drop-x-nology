import React, { Component } from "react";
import styles from "./LoadDots.module.scss";

// based on https://codepen.io/ManUtopiK/pen/mJJPWw (MIT license)
export default class LoadDots extends Component {
    render() {
        return (
            <div className={styles.loading}>
                <div className={styles.dots}>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        );
    }
}
