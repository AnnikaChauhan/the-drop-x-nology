import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import LandingPage from "../containers/LandingPage";
import LoginPage from "../containers/LoginPage";
import Fan from "../containers/Main/Fan";
import Artist from "../containers/Main/Artist";
import NotFound from "../components/Navbar/NotFound";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="index" />
                <LoginPage path="index" />
                <LandingPage path="initial-login" />
                <Fan path="fan/*" />
                <Artist path="artist/*" />
                <NotFound default />
            </Router>
        );
    }
}
