import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import styles from "./Routes.module.scss";
import Dashboard from "../containers/Main/Fan/Dashboard";
import NotFound from "../components/Navbar/NotFound";
import PreviewRelease from "../components/Main/Artist/PreviewRelease";
import Help from "../components/Help";
import ArtistProfileView from "../components/Main/Fan/Dashboard/ArtistProfileView";

export default class FanRoutes extends Component {
    render() {
        return (
            <Router className={styles.Router}>
                <Redirect noThrow from="/" to="home" />
                <Dashboard path="home" />
                <PreviewRelease path="release/*" />
                <Help path="help" />
                <ArtistProfileView path="artist/*" />
                <NotFound default />
            </Router>
        );
    }
}
