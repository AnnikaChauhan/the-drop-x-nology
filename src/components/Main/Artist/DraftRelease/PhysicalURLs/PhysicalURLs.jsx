import React, { Component } from "react";
import styles from "./PhysicalURLs.module.scss";

export default class PhysicalURLs extends Component {
    render() {
        return (
            <div className={styles.URLs}>
                <h3>Physical URLs</h3>
                <div>
                    <h4>Music Store</h4>
                    <input type="url" />
                    <h4>Merchandise</h4>
                    <input type="url" />
                </div>
                <hr/>
            </div>
        );
    }
}