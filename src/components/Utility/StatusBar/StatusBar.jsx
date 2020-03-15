import React, { Component } from "react";
import styles from "./StatusBar.module.scss";

export default class StatusBar extends Component {
    render() {
        return (
            <article className={styles.StatusBar}>
                <div className={styles.title}>{this.props.title}</div>
                <div className={styles.type}>{this.props.type}</div>
                <div
                    className={`${styles.status} ${
                        this.props.status === "Live" ? `${styles.live}` : null
                    }`}
                >
                    {this.props.status}
                </div>
            </article>
        );
    }
}
