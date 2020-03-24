import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import styles from "./Routes.module.scss";
import Dashboard from "../containers/Main/Artist/Dashboard";
import NotFound from "../components/Navbar/NotFound";
import ArtistBio from "../components/Main/Artist/ArtistBio";
import DraftRelease from "../components/Main/Artist/DraftRelease";
import PreviewRelease from "../components/Main/Artist/PreviewRelease";
import Help from "../components/Help";

export default class FanRoutes extends Component {
    render() {
        return (
            <Router className={styles.Router}>
                <Redirect noThrow from="/" to="home" />
                <Dashboard path="home" user={this.props.user} />
                <DraftRelease path="home/add-release" user={this.props.user} />
                <PreviewRelease path="release/*" />
                <ArtistBio path="profile" />
                <Help path="help" />
                <NotFound default />
            </Router>
        );
    }
}
