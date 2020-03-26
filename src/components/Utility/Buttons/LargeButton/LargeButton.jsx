import React, { Component } from "react";
import styles from "./LargeButton.module.scss";

class LargeButton extends Component {
    render() {
        return (
            <div className={styles.LargeButton} onClick={this.props.handleClick}>
                <a href={this.props.link} className={styles.text}>
                    {this.props.text.toUpperCase()}
                </a>
            </div>
        );
    }
}

export default LargeButton;
