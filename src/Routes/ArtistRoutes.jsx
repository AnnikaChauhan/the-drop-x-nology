import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import styles from "./Routes.module.scss";
import Dashboard from "../containers/Main/Artist/Dashboard";
import NotFound from "../components/Navbar/NotFound";
import ArtistBio from "../components/Main/Artist/ArtistBio";
import DraftRelease from "../components/Main/Artist/DraftRelease";
import ReleaseArchive from "../components/Main/Artist/ReleaseArchive";
import ManageReleases from "../components/Main/Artist/ManageReleases";
import PreviewRelease from "../components/Main/Artist/ManageReleases/PreviewReleases";
import Help from "../components/Help";

export default class FanRoutes extends Component {
    render() {
        return (
            <Router className={styles.Router}>
                <Redirect noThrow from="/" to="home" />
                <Dashboard path="home" />
                <DraftRelease user={this.props.user} path="home/add-release" />
                <ManageReleases path="home/releases" />
                <ReleaseArchive path="home/archive" />
                <PreviewRelease path="preview" />
                <ArtistBio path="profile" />
                <Help path="help" />
                <NotFound default />
            </Router>
        );
    }
}
