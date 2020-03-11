import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import Routes from "../../Routes/Routes";
// import ReleaseCardList from "../Main/Fan/../"

function App() {
    return (
        <div className={styles.App}>
            <ReleaseCardList />
            <Routes />
        </div>
    );
}

export default App;
