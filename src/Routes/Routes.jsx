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
    // state = {
    //     user: null,
    //     loginFormData: {
    //         email: "",
    //         password: ""
    //     }
    // };

    // signIn = () => {
    //     firebase
    //         .auth()
    //         .signInWithPopUp(providers.google)
    //         .then(result => {
    //             this.setState({ user: result.user });
    //             console.log(this.state.user);
    //         });
    // };

    // setEmail = (event) => {
    //     const email = event.target.value;
    //     this.setState({ email });
    // }

    // setPassword = (event) => {
    //     const password = event.target.value;
    //     this.setState({ password });
    // }

    // signInWithEmailAndPassword = (event) => {
    //     event.preventDefault()
    //     firebase
    //         .auth()
    //         .signInWithEmailAndPassword(this.state.loginFormData.email, this.state.loginFormData.password)
    //         .then(result => {
    //             console.log(result);
    //             this.setState({ user: result.user})
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    // signOut = () => {};

    render() {
    //    console.log(this.state);
        return (
            <Router>
                {/* <LoginPage path="/" 
                    signInWithEmailAndPassword={this.signInWithEmailAndPassword}
                    setEmail={this.state.loginFormData.email}
                    setPassword={this.state.loginFormData.password}
                /> */}
                <LandingPage path="initial-login" />
                <Fan path="fan/*" />
                <Artist path="artist/*" />
                <StreamingLogin path="stream-login" />
                <NotFound default />
            </Router>
        );
    }
}
