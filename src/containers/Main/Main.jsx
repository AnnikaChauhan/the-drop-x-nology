import React from "react";
import styles from "./Main.module.scss";
import ReleaseArchive from "../../components/Main/ReleaseArchive";
// import FanDashboard from "../FanDashboard";

function Main() {
    return (
        <section className={styles.Main}>
            <ReleaseArchive />
            {/* Components to go in here */}
        </section>
    );
}

export default Main;
