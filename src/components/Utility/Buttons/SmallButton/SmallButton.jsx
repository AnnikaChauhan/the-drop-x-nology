import React, { Component } from "react";
import styles from "./SmallButton.module.scss";

class SmallButton extends Component {
    render() {
        return (
            <section>
                <div className={styles.smallbutton}>
                    <div className={styles.translate}></div>
                    <a href={this.props.link} className={styles.Btntext}>
                        {this.props.text.toUpperCase()}
                    </a>
                </div>
            </section>
        );
    }
}

export default SmallButton;
