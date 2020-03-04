import React, { Component } from "react";
import styles from "../Title/Title.module.scss";

class Title extends Component {
    render() {
        return (
            <div className={styles.DashboardTitle}>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Title;
