import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import LandingPage from "../LandingPage";
import Navbar from "../../components/Navbar";
import Main from "../Main";
import ChooseArtists from "../../components/ChooseArtists";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Main />
        </div>
    );
}

export default App;
