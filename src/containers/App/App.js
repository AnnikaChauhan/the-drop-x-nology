import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.module.scss";
import styles from "./App.module.scss";
import Routes from "../../Routes/Routes";


function App() {
    return (
        <div className={styles.App}>
            <Routes />
        </div>
    );
}

export default App;
