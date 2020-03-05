import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import styles from "./Routes.module.scss";
import Dashboard from "../containers/Main/Artist/Dashboard";
import NotFound from "../components/Navbar/NotFound";

export default class FanRoutes extends Component {
    render() {
        return (
            <Router className={styles.Router}>
                <Redirect noThrow from="/" to="dashboard" />
                <Dashboard path="dashboard" />
                <NotFound default />
            </Router>
        );
    }
}
