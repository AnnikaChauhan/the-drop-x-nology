import React, { Component } from "react";
import styles from "./Main.module.scss";
import FanRoutes from "../../../Routes/FanRoutes";
import Navbar from "../../../components/Navbar";

export default class Main extends Component {
    render() {
        return (
            <div className={styles.Main}>
                <Navbar signOut={this.props.signOut} />
                <FanRoutes user={this.props.user} />
            </div>
        );
    }
}
