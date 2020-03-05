import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import Title from "../../../../components/Utility/Title";

class Dashboard extends Component {
    render() {
        return (
            <section className={styles.Dashboard}>
                <Title title={"Artist Dashboard"} />
            </section>
        );
    }
}

export default Dashboard;
