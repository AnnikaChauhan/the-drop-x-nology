import React, { Component } from "react";
import styles from "./TickButton.module.scss";

export default class TickButton extends Component {
    render() {
        return (
            <div className={styles.TickButton}>
                <div className={styles.translate}></div>
                <a href={this.props.link} className={styles.text}>
                    {this.props.text}
                </a>
                <i class="fas fa-check"></i>
            </div>
        );
    }
}
