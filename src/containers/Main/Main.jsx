import React from "react";
import styles from "./Main.module.scss";
import ReleaseArchive from "../../components/Main/ReleaseArchive";
// import FanDashboard from "../FanDashboard";
import ArtistBio from "../../components/ArtistBio/ArtistBio";
import FanDashboard from "../../containers/FanDashboard";
import ManageReleases from "../../components/Main/ManageReleases/ManageReleases";
import PreviewReleases from "../../components/Main/ManageReleases/PreviewReleases";
import ArtistProfile from "../../components/Main/ArtistProfile";
import DraftRelease from "../../components/DraftRelease";

function Main() {
    return (
        <section className={styles.Main}>
            <DraftRelease />
        </section>
    );
}

export default Main;
