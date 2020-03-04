import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FanDashboard.module.scss";
import SearchBar from "../../components/Utility/SearchBar";
import TitleFormatting from "../../components/Utility/TitleFormatting";
import ReleaseCardList from "../../components/Main/FanDashboard/ReleaseCardList";

class FanDashboard extends Component {
    render() {
        return (
            <section className={styles.FanDashboard}>
                <TitleFormatting title={"Fan Dashboard"} />
                <SearchBar placeHolder={"Search Artists..."} /> 
                <ReleaseCardList />
            </section>
        );
    }
}

export default FanDashboard;
