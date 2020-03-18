import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import LandingPage from "../containers/LandingPage";
import LoginPage from "../containers/LoginPage";
import Fan from "../containers/Main/Fan";
import Artist from "../containers/Main/Artist";
import NotFound from "../components/Navbar/NotFound";
import StreamingLogin from "../containers/StreamingLogin/StreamingLogin";

import firebase, { providers } from "../firebase";

export default class Routes extends Component {
    state = {
        user: null,
        loginFormData: {
            email: "",
            password: ""
        }
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

    setEmail = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }

    setPassword = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }

    signInWithEmailAndPassword = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.loginFormData.email, this.state.loginFormData.password)
            .then(result => {
                this.setState({ loginFormData: result.loginFormData})
                console.log(result);
            })
    }

    signOut = () => {};

    render() {
       
        return (
            <Router>
                <LoginPage path="/" 
                    signInWithEmailAndPassword={this.props.signInWithEmailAndPassword}
                    setEmail={this.state.loginFormData.email}
                    setPassword={this.state.loginFormData.password}
                />
                <LandingPage path="initial-login" />
                <Fan path="fan/*" />
                <Artist path="artist/*" />
                <StreamingLogin path="stream-login" />
                <NotFound default />
            </Router>
        );
    }
}
