import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import LandingPage from "../LandingPage";
import Navbar from "../../components/Navbar";
import Main from "../Main";
import DraftRelease from "../../components/DraftRelease/DraftRelease";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <DraftRelease />
            {/* <Main /> */}
        </div>
    );
}

export default App;
