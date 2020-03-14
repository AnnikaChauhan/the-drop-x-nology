import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "../containers/LandingPage";
import LoginPage from "../containers/LoginPage";
import Fan from "../containers/Main/Fan";
import Artist from "../containers/Main/Artist";
import NotFound from "../components/Navbar/NotFound";
import StreamingLogin from "../containers/StreamingLogin/StreamingLogin";

import firebase, { providers } from "../firebase";

export default class Routes extends Component {
    state = {
        user: null
    };

    signIn = () => {
        firebase
            .auth()
            .signInWithPopUp(providers.google)
            .then(result => {
                this.setState({ user: result.user });
                console.log(this.state.user);
            });
    };

    signOut = () => {};

    render() {
        return (
            <Router>
                <LoginPage path="/" />
                <LandingPage path="initial-login" />
                <Fan path="fan/*" />
                <Artist path="artist/*" />
                <StreamingLogin path="stream-login" />
                <NotFound default />
            </Router>
        );
    }
}
