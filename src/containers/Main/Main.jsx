import React from "react";
import styles from "./Main.module.scss";
import FanDashboard from "../FanDashboard";

function Main() {
    return (
        <section className={styles.Main}>
            {/* Components to go in here */}
            <FanDashboard />
        </section>
    );
}

export default Main;
