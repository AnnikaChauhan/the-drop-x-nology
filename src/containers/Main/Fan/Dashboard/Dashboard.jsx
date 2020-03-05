import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import SearchBar from "../../../../components/Utility/SearchBar";
import Title from "../../../../components/Utility/Title";
import ReleaseCardList from "../../../../components/Main/Fan/Dashboard/ReleaseCardList";

class Dashboard extends Component {
    render() {
        return (
            <section className={styles.Dashboard}>
                <Title title={"Fan Dashboard"} />
                <SearchBar placeHolder={"Search Artists..."} />
                <ReleaseCardList />
            </section>
        );
    }
}

export default Dashboard;
