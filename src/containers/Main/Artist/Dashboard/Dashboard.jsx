import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import TitleFormatting from "../../../../components/Utility/TitleFormatting";

class Dashboard extends Component {
    render() {
        return (
            <section className={styles.Dashboard}>
                <TitleFormatting title={"Artist Dashboard"} />
            </section>
        );
    }
}

export default Dashboard;
