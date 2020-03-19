import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import LargeButton from "../../Utility/Buttons/LargeButton";
import { Link } from "@reach/router";
import { gsap } from 'gsap';
import EmailSignIn from "../EmailSignIn";

class SignIn extends Component {
    state = {
        user: null,
        loginFormData: {
            email: "",
            password: ""
        },
      };
    constructor(props) {
        super(props);
        this.myElement = [];
        this.myTween = null;
    }

    componentDidMount() {
        this.myTween = gsap.to(this.myElement, {opacity: 1, duration: 0.5, delay: 0.5} )
    }

    handleLoginDetails = (event) => {
        this.setState({
            loginFormData: {
                ...this.state.loginFormData,
                    [event.target.name]: event.target.value
              }
        })
      }    

    render() {
        // console.log(this.props.email)
        return (
            <section className={styles.SignInContainer}>
                <div className={styles.wrapper}>
                    <div 
                        className={styles.comet1}
                        ref={div => this.myElement.push(div)}
                    ></div>
                    <div className={styles.buttonStyle}
                         ref={div => this.myElement.push(div)}>
                        <Link to="/initial-login">
                            <LargeButton text={`Sign up with Google`} />
                        </Link>
                    </div>
                    <EmailSignIn 
                         signInWithEmailAndPassword={this.props.signInWithEmailAndPassword}
                         handleLoginDetails={this.handleLoginDetails}
                         loginFormData={this.state.loginFormData}
                     />
                </div>
            </section>
        );
    }
}
export default SignIn;