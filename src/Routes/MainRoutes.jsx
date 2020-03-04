import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import FanDashboard from "../containers/Main/FanDashboard";
import NotFound from "../components/Navbar/NotFound";

export default class MainRoutes extends Component {
    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="fan-dashboard" />
                <FanDashboard path="fan-dashboard" />
                <NotFound default />
            </Router>
        );
    }
}
