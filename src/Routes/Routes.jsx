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
        additionalUserInfo: null,
        loginFormData: {
            email: "",
            password: ""
        }
    };

    componentDidMount() {
        // If there is a user in the session, set them to the state otherwise state.user = null;
    }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({
                    user: result.user,
                    additionalUserInfo: result.additionalUserInfo
                });
                // Add something to session so that user is logged in
                //localStorage/sessionStorage
                globalHistory.navigate("/private/initial-login");
            })
            .catch(error => {
                console.log(error);
            })
    };   
    
    signInWithEmailAndPassword = (event) => {
        // DONT RELOAD THE PAGE
            event.preventDefault()
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.loginFormData.email, this.state.loginFormData.password)
                .then(result => {
                    console.log(result);
                    this.setState({ user: result.user})
                    // Add something to session so that user is logged in
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

    handleLoginDetails = (event) => {
        this.setState({
            loginFormData: {
                ...this.state.loginFormData,
                    [event.target.name]: event.target.value
              }
        })
    }    

    render() {
        return (
            <Router>
                <LoginPage 
                    path="/" 
                    signIn={this.signIn} 
                    signInWithEmailAndPassword={this.signInWithEmailAndPassword}
                    handleLoginDetails={this.handleLoginDetails}
                    loginFormData={this.state.loginFormData}
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
