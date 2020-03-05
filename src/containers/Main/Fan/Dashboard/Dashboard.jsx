import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import SearchBar from "../../../../components/Utility/SearchBar";
import TitleFormatting from "../../../../components/Utility/TitleFormatting";
import ReleaseCardList from "../../../../components/Main/Fan/Dashboard/ReleaseCardList";

class Dashboard extends Component {
    render() {
        return (
            <section className={styles.Dashboard}>
                <TitleFormatting title={"Fan Dashboard"} />
                <SearchBar placeHolder={"Search Artists..."} />
                <ReleaseCardList />
            </section>
        );
    }
}

export default Dashboard;
