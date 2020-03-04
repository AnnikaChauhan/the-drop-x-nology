import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import FanDashboard from "../containers/Main/FanDashboard";

const NotFound = () => <h2>404: Page not Found</h2>;

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
