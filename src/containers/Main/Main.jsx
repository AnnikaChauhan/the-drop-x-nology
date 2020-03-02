import React from "react";
import styles from "./Main.module.scss";
import ReleaseArchive from "../../components/ReleaseArchive/ReleaseArchive";

function Main() {
    return (
        <section className={styles.Main}>
            {/* Components to go in here */}
            <ReleaseArchive />
        </section>
    );
}

export default Main;
