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
                globalHistory.navigate("/private/initial-login");
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
                console.log(this.state.user)
                console.log("good buye")
            })
    };

    render() {
        return (
            <Router>
                <LoginPage path="/" signIn={this.signIn} />
                <PrivateRoutes path="private" user={this.state.user}>
                    <LandingPage
                        user={this.state.user}
                        additionalUserInfo={this.state.additionalUserInfo}
                        path="initial-login"
                    />
                    <Fan path="fan/*" signOut={this.signOut}/>
                    <Artist user={this.state.user} path="artist/*" signOut={this.signOut}/>
                </PrivateRoutes>
                <NotFound default />
            </Router>
        );
    }
}
