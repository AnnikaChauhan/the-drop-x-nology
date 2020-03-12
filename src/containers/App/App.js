import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import Routes from "../../Routes/Routes";
import Main from "../../components/";


function App() {
    return (
        <div className={styles.App}>
            <Main />
            <Routes />
        </div>
    );
}

export default App;
