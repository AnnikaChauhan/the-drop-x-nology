import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import Routes from "../../Routes/Routes";
import ChooseArtists from "../../components/ChooseArtists/ChooseArtists";
import LandingPage from "../LandingPage";
import LoginPage from "../LoginPage";

function App() {
    return (
        <div className={styles.App}>
            <LoginPage />
            <Routes />
        </div>
    );
}

export default App;
