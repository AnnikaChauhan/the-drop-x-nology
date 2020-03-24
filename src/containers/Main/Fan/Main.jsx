import React from "react";
import styles from "./Main.module.scss";
import FanRoutes from "../../../Routes/FanRoutes";
import Navbar from "../../../components/Navbar";

function Main() {
    return (
        <div className={styles.Main}>
            <Navbar signOut={this.props.signOut}/>
            <FanRoutes />
        </div>
    );
}

export default Main;
