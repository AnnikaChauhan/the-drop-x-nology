import React, { Component } from "react";
import styles from "../TitleFormatting/TitleFormatting.module.scss";

class TitleFormatting extends Component {
    render() {
        return (
            <div className={styles.DashboardTitle}>
                <h1>{this.props.title}</h1>
                
            </div>
        );
    }
}

export default TitleFormatting;
