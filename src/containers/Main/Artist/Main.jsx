import React from "react";
import styles from "./Main.module.scss";
import ArtistRoutes from "../../../Routes/ArtistRoutes";
import Navbar from "../../../components/Navbar";

function Main() {
    return (
        <div className={styles.Main}>
            <Navbar />
            <ArtistRoutes />
        </div>
    );
}

export default Main;

