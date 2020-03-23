import React, { Component } from "react";
import { Router, globalHistory } from "@reach/router";
import LandingPage from "../containers/LandingPage";
// import LoginPage from "../containers/LoginPage/LoginPage";
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
    
    signInWithEmailAndPassword = (event) => {
            event.preventDefault()
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.loginFormData.email, this.state.loginFormData.password)
                .then(result => {
                    console.log(result);
                    this.setState({ user: result.user})
                })
                .catch(error => {
                    console.error(error);
                })
        }
    

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({ user: null });
                globalHistory.navigate("/");
            })
    };

    setEmail = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }

    setPassword = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }

    render() {
        return (
            <Router>
                <LoginPage 
                    path="/" 
                    signIn={this.signIn} 
                    signInWithEmailAndPassword={this.signInWithEmailAndPassword}
                    setEmail={this.state.loginFormData.email}
                    setPassword={this.state.loginFormData.password}
                />
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
