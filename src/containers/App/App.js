import React from 'react';
import './App.module.scss';
import styles from "./App.module.scss";
import LandingPage from "../../components/LandingPage";
import Navbar from "../../components/Navbar";
import Main from "../Main";
import ReleaseArchive from "../../components/ReleaseArchive/ReleaseArchive"

function App() {
    return (
        <div className={styles.App}>
            <LandingPage />

        </div>
    );
}

export default App;
