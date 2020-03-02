import React from 'react';
import './App.module.scss';
import styles from "./App.module.scss";
import LandingPage from "../../components/LandingPage";
import Navbar from "../../components/Navbar";
import Main from "../Main";


function App() {
    return (
        <div className={styles.App}>
            {/* <LandingPage /> */}
            <Navbar />
            <Main />

        </div>
    );
}

export default App;
