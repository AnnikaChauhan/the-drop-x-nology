import React, { Component } from "react";
import styles from "./DashboardTitle.module.scss";

class DashboardTitle extends Component {
    render() {
        return (
            <div className={styles.DashboardTitle}>
                <h1>Fan Dashboard</h1>
            </div>
        );
    }
}

export default DashboardTitle;
