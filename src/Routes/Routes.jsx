import React, { Component } from "react";
import { Router, globalHistory } from "@reach/router";
import LandingPage from "../containers/LandingPage";
import LoginPage from "../containers/LoginPage/LoginPage";
import Fan from "../containers/Main/Fan";
import Artist from "../containers/Main/Artist";
import NotFound from "../components/Navbar/NotFound";
import DSPLogin from '../containers/DSPLogin';

import firebase, { providers } from "../firebase";
import PrivateRoutes from "./PrivateRoutes.jsx";

export default class Routes extends Component {
    state = {
        user: null,
        additionalUserInfo: null
    };

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({
                    user: result.user,
                    additionalUserInfo: result.additionalUserInfo
                });
                globalHistory.navigate("/connect-music");
            })
            .catch(error => {
                console.log(error);
            })
    };

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({ user: null });
                globalHistory.navigate("/");
            })
    };

    render() {
        return (
            <Router>
                <LoginPage path="/" signIn={this.signIn} />
                <DSPLogin path="connect-music" />
                <PrivateRoutes path="private" user={this.state.user}>
                    <LandingPage
                        user={this.state.user}
                        additionalUserInfo={this.state.additionalUserInfo}
                        path="initial-login"
                    />
                    <Fan path="fan/*" />
                    <Artist user={this.state.user} path="artist/*" />
                </PrivateRoutes>
                <NotFound default />
            </Router>
        );
    }
}
