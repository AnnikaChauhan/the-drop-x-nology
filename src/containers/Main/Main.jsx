import React from "react";
import styles from "./Main.module.scss";
import ReleaseArchive from "../../components/Main/ReleaseArchive";
// import FanDashboard from "../FanDashboard";
import ArtistBio from "../../components/ArtistBio/ArtistBio";

function Main() {
    return (
        <section className={styles.Main}>
            <ArtistBio />
            {/* Components to go in here */}
        </section>
    );
}

export default Main;
