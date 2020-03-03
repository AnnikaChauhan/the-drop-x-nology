import React from "react";
import styles from "./FanDashboard.module.scss";
import SearchBar from "../../components/Main/FanDashboard/SearchBar";
import DashboardTitle from "../../components/Main/FanDashboard/DashboardTitle";
import ReleaseCardList from "../../components/Main/FanDashboard/ReleaseCardList";

function FanDashboard() {
    return (
        <section className={styles.FanDashboard}>
            <DashboardTitle />
            <SearchBar />
            <ReleaseCardList />
        </section>
    );
}

export default FanDashboard;
