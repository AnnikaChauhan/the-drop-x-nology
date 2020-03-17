import React, { Component } from "react";
import { Router, globalHistory } from "@reach/router";
import LandingPage from "../containers/LandingPage";
import LoginPage from "../containers/LoginPage/LoginPage";
import Fan from "../containers/Main/Fan";
import Artist from "../containers/Main/Artist";
import NotFound from "../components/Navbar/NotFound";

import firebase, { providers } from "../firebase";
import PrivateRoutes from "./PrivateRoutes.jsx";

export default class Routes extends Component {
    state = {
        user: "testing"
    };

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({ user: result.user });
                console.log(this.state.user);
                globalHistory.navigate("/private/initial-login");
            });
    };

    //signOut = () => {};

    render() {
        return (
            <Router>
                <LoginPage path="/" signIn={this.signIn} />
                <PrivateRoutes path="private" user={this.state.user}>
                    <LandingPage path="initial-login" />
                    <Fan path="fan/*" />
                    <Artist path="artist/*" />
                </PrivateRoutes>
                <NotFound default />
            </Router>
        );
    }
}
