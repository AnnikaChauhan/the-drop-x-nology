import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import LandingPage from "../containers/LandingPage";
import Main from "../containers/Main";
import NotFound from "../components/Navbar/NotFound";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="index" />
                <LandingPage path="index" />
                <Main path="main/*" />
                <NotFound default />
            </Router>
        );
    }
}
