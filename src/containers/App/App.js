import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import Routes from "../../Routes/Routes";
import ReleaseCardList from "../Main/Fan/Dashboard/Dashboard"

function App() {
    return (
        <div className={styles.App}>
            <Routes />
        </div>
    );
}

export default App;
