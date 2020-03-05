import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import LandingPage from "../LandingPage";
import Navbar from "../../components/Navbar";
import Main from "../Main";
import ChooseArtists from "../../components/ChooseArtists";
import ReleaseArchive from "../../components/Main/ReleaseArchive";
import ManageReleases from "../../components/Main/ReleaseArchive/ManageReleases/ManageReleases";
import PreviewReleases from "../../components/Main/ReleaseArchive/ManageReleases/PreviewReleases";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <PreviewReleases />
            <Main />
        </div>
    );
}

export default App;
