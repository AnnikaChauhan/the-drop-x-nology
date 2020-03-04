import React, { Component } from "react";
import styles from "./SmallButton.module.scss";

class SmallButton extends Component {
    render() {
        return (
            <section className={styles.smallbutton}>
                <button>{this.props.placeholder}</button>
            </section>
        );
    }
}

export default SmallButton;