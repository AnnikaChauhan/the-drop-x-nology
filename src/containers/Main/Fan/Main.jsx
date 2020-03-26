import React from "react";
import styles from "./Main.module.scss";
import FanRoutes from "../../../Routes/FanRoutes";
import Navbar from "../../../components/Navbar";
import { Component } from "react";

export default class Main extends Component {
    render() {
        return (
            <div className={styles.Main}>
                <Navbar signOut={this.props.signOut}/>
                <FanRoutes />
            </div>
        );
    }
    }
   


