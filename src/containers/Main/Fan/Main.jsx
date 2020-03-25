import React, { Component } from "react";
import styles from "./Main.module.scss";
import FanRoutes from "../../../Routes/FanRoutes";
import Navbar from "../../../components/Navbar";

class Main extends Component {
    render() {
        return (
            <div className={styles.Main}>
                <Navbar />
                <FanRoutes user={this.props.user}/>
            </div>
        );
    }
}

export default Main;
