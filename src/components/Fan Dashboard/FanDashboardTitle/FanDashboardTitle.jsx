import React, { Component } from "react";
import styles from "./FanDashboardTitle.module.scss";

class FanDashboardTitle extends Component {
    render() {
        return(
            <section className={styles.fanDashboardHeader}>
                <h1>Fan Dashboard</h1>
            </section>
        )
    }
}

export default FanDashboardTitle;