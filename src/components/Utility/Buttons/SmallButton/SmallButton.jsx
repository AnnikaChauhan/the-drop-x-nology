import React, { Component } from "react";
import styles from "./SmallButton.module.scss";

class SmallButton extends Component {
    render() {
        return (
            <div onClick={this.props.onClick} className={this.props.followed ? `${styles.SmallButtonFollowed}` : `${styles.SmallButton}`}>
                <a href={this.props.link} className={styles.text}>
                    {this.props.text.toUpperCase()}
                </a>
            </div>
        );
    }
}

export default SmallButton;
