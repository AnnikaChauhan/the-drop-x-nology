import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Dashboard from "../containers/Main/Fan/Dashboard";
import NotFound from "../components/Navbar/NotFound";

export default class FanRoutes extends Component {
    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="dashboard" />
                <Dashboard path="dashboard" />
                <NotFound default />
            </Router>
        );
    }
}
