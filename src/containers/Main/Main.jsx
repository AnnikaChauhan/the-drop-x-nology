import React from "react";
import styles from "./Main.module.scss";
import MainRoutes from "../../Routes/MainRoutes";
import Navbar from "../../components/Navbar";

function Main() {
    return (
        <div className={styles.Main}>
            <Navbar />
            <MainRoutes />
        </div>
    );
}

export default Main;
