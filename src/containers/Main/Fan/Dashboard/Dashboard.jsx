import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import SearchBar from "../../../../components/Utility/SearchBar";
import Header from "../../../../components/Utility/Header";
import ReleaseCardList from "../../../../components/Main/Fan/Dashboard/ReleaseCardList";

class Dashboard extends Component {

    searchFocus() {
        console.log("Fuck you bloody")
    }

    searchBlur() {
        console.log("ok bye")
    }

    render() {
        return (
            <section className={styles.Dashboard}>
                <Header title={"Dashboard"} />
                <SearchBar onFocus={this.searchFocus} onBlur={this.searchBlur} placeHolder={"Search Artists..."} />
                <ReleaseCardList />
                {/* <SearchList /> */}
            </section>
        );
    }
}

export default Dashboard;
