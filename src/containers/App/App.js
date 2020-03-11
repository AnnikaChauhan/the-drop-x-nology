import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import Routes from "../../Routes/Routes";
import ChooseArtists from "../../components/ChooseArtists/ChooseArtists";

function App() {
    return (
        <div className={styles.App}>
            <ChooseArtists />
            <Routes />
        </div>
    );
}

export default App;
