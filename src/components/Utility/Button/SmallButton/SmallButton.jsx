import React, { Component } from "react";
import styles from "./SmallButton.module.scss";

class SmallButton extends Component {
    render() {
        return (
            <section>
                <button className={styles.smallbutton}>{this.props.text}</button>
            </section>
        );
    }
}

export default SmallButton;