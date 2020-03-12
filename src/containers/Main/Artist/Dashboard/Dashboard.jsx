import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import Header from "../../../../components/Utility/Header";
import Profile from "../../../../components/Main/Artist/Profile";

class Dashboard extends Component {
    render() {
        return (
            <section className={styles.Dashboard}>
                <Header title={"Dashboard"} />
                <Profile />
            </section>
        );
    }
}

export default Dashboard;
