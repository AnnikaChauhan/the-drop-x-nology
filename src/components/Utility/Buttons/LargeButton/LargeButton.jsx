import React, { Component } from "react";
import styles from "./LargeButton.module.scss";

class LargeButton extends Component {
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

export default LargeButton;
