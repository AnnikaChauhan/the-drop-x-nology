import React from "react";
import styles from "./Main.module.scss";
import ReleaseArchive from "../../components/Main/ReleaseArchive";
import FanDashboard from "../../containers/FanDashboard";
import ManageReleases from "../../components/Main/ManageReleases/ManageReleases";
import PreviewReleases from "../../components/Main/ManageReleases/PreviewReleases";

function Main() {
    return (
        <section className={styles.Main}>
            {/* Components to go in here */}
            <ReleaseArchive />
        </section>
    );
}

export default Main;
