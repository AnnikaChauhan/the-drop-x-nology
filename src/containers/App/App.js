import React from "react";
import styles from "./App.module.scss";
import LandingPage from "../LandingPage";
import LoginPage from "../LoginPage";
import Navbar from "../../components/Navbar";
import Main from "../Main";
import ChooseArtists from "../../components/ChooseArtists";

function App() {
    return (
        <div className={styles.App}>
            <LandingPage />
            {/* <LoginPage /> */}
        </div>
    );
}

export default App;
