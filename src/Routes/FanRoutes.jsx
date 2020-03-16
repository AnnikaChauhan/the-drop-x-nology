import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import styles from "./Routes.module.scss";
import Dashboard from "../containers/Main/Fan/Dashboard";
import NotFound from "../components/Navbar/NotFound";
import PreviewRelease from "../components/Main/Artist/ManageReleases/PreviewReleases";

export default class FanRoutes extends Component {
    render() {
        return (
            <Router className={styles.Router}>
                <Redirect noThrow from="/" to="dashboard" />
                <Dashboard path="dashboard" />
                <PreviewRelease path="release/*" />
                <NotFound default />
            </Router>
        );
    }
}
