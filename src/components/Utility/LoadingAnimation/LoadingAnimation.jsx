import React, { Component } from "react";
import styles from "./LoadingAnimation.module.scss";

export default class LoadingAnimation extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.animation}>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
                <p>Searching...</p>
            </div>
        );
    }
}
