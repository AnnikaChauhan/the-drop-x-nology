import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";

const NotFound = () => <h2>404: Page not Found</h2>;

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="login" />
                <NotFound default />
            </Router>
        );
    }
}
