import React from "react";
import styles from "./Main.module.scss";
import ReleaseArchive from "../../components/Main/ReleaseArchive";
// import FanDashboard from "../FanDashboard";
import ArtistBio from "../../components/ArtistBio/ArtistBio";
import FanDashboard from "../../containers/FanDashboard";

function Main() {
    return (
        <section className={styles.Main}>
            {/* Components to go in here */}
            {/* <ArtistBio /> */}
            {/* <FanDashboard /> */}
        </section>
    );
}

export default Main;
