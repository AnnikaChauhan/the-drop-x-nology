import React from "react";
import styles from "./Main.module.scss";
import FanArtistSearch from "../../components/Fan Dashboard/Fan-ArtistSearch";
import FanDashBoardTitle from "../../components/Fan Dashboard/FanDashboardTitle";
import ReleaseCardContainers from "../../components/Fan Dashboard/ReleaseCardContainers";

function Main() {
    return (
        <section className={styles.Main}>
            <FanDashBoardTitle />
            <FanArtistSearch />
            <ReleaseCardContainers />
            {/* Components to go in here */}
        </section>
    );
}

export default Main;
