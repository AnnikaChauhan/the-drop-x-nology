import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import LandingPage from "../containers/LandingPage";
import LoginPage from "../containers/LoginPage/LoginPage";
import Fan from "../containers/Main/Fan";
import Artist from "../containers/Main/Artist";
import NotFound from "../components/Navbar/NotFound";

import firebase, { providers } from "../firebase";

export default class Routes extends Component {
    constructor(props){
        super(props);
    } 
    state = {
        user: null
    }

    signIn = () => {

        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({user: result.user});
                console.log(this.state.user);
                this.props.history('/initial-login')
            })
    }

    signOut = () => {}

    render() {
        return (
            <Router>
                <LoginPage path="/" signIn={this.signIn} render={() => <LandingPage user={this.state.user} />} />
                <LandingPage path="initial-login" />
                <Fan path="fan/*" />
                <Artist path="artist/*" />
                <NotFound default />
            </Router>
        );
    }
}
