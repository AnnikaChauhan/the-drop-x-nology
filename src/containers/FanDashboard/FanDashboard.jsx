import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FanDashboard.module.scss";
import SearchBar from "../../components/Utility/SearchBar";
import TitleFormatting from "../../components/Utility/TitleFormatting";
import ReleaseCardList from "../../components/Main/FanDashboard/ReleaseCardList";

function FanDashboard() {
    return (
        <section className={styles.FanDashboard}>
            <TitleFormatting  />
            <SearchBar />
            <ReleaseCardList />
        </section>
    );
}

export default FanDashboard;
