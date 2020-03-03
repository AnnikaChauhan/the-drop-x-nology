import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import LandingPage from "../LandingPage";
import Navbar from "../../components/Navbar";
import Main from "../Main";
import ChooseArtists from "../../components/ChooseArtists";
import ReleaseArchive from "../../components/Main/ReleaseArchive";
import ManageReleases from "../../components/Main/ReleaseArchive/ManageReleases/ManageReleases";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <ManageReleases />
        </div>
    );
}

export default App;
