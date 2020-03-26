import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import LargeButton from "../../Utility/Buttons/LargeButton";
import Tabs from "../../Utility/Tabs";
import { gsap } from 'gsap';
import EmailSignIn from "../EmailSignIn";
import EmailSignUp from "../../SignUp/EmailSignUp/EmailSignUp";

class SignIn extends Component {
    state = {
        user: null
    };
    constructor(props) {
        super(props);
        this.myElement = [];
        this.myTween = null;
    }

    componentDidMount() {
        this.myTween = gsap.to(this.myElement, {
            opacity: 1,
            duration: 0.5,
            delay: 0.5
        });
    }


    render() {
        console.log(this.props);
        return (
            <section className={styles.SignInContainer}>
                <div className={styles.wrapper}>
                    <div
                        className={styles.comet1}
                        ref={div => this.myElement.push(div)}
                    ></div>
                    <div
                        className={styles.buttonStyle}
                        ref={div => this.myElement.push(div)}
                    >

                        <Tabs
                            tabs={["Login", "Signup"]}
                            content={[
                                <div>
                                    <LargeButton
                                        handleClick={this.props.signIn}
                                        // onClick={this.props.signIn}
                                        text={`Login with Google`}
                                    />
                                    <br />
                                    <h6>or</h6>
                                    <EmailSignIn
                                        signInWithEmailAndPassword={this.props.signInWithEmailAndPassword}
                                        handleLoginDetails={this.props.handleLoginDetails}
                                        loginFormData={this.props.loginFormData}
                                    />
                                </div>
                                ,
                                <div>
                                    <LargeButton
                                        handleClick={this.props.signIn}
                                        // onClick={this.props.signIn}
                                        text={`Sign Up with Google`}
                                    />
                                    <br />
                                    <h6>or</h6>
                                    <EmailSignUp
                                        signUp={this.props.signUp}
                                        handleLoginDetails={this.props.handleLoginDetails}
                                        loginFormData={this.props.loginFormData}
                                    />
                                </div>
                            ]}
                        />






                        {/* <Tabs
                            tabs={["Sign in with Google", "Sign in with Email"]}
                            content={[      
                                <LargeButton
                                    handleClick={this.props.signIn}
                                    // onClick={this.props.signIn}
                                    text={`Sign up with Google`} 
                                />         
                            ,            
                                <EmailSignIn 
                                    signInWithEmailAndPassword={this.props.signInWithEmailAndPassword}
                                    handleLoginDetails={this.props.handleLoginDetails}
                                    loginFormData={this.props.loginFormData}
                                />
                            ]}
                        /> */}
                    </div>
                </div>
            </section>
        );
    }
}
export default SignIn;
