import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import Profile from "../../../../components/Main/Artist/Profile";

class Dashboard extends Component {
    render() {
        return (
            <section className={styles.Dashboard}>
                <Profile />
            </section>
        );
    }
}

export default Dashboard;
