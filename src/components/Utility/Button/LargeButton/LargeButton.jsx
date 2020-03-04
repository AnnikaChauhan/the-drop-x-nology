import React, { Component } from "react";
import styles from "./LargeButton.module.scss";

class LargeButton extends Component {
    render() {
        return (
            <section>
                <button className={styles.largeButton}>{this.props.text}</button>
            </section>
        );
    }
}

export default LargeButton;