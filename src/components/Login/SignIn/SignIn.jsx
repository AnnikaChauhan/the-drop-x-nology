import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import LargeButton from "../../Utility/Buttons/LargeButton";
<<<<<<< HEAD
import { Link } from "@reach/router";
import { gsap } from 'gsap';
import EmailSignIn from "../EmailSignIn";
=======
import { gsap } from "gsap";
>>>>>>> 19585434d5a9b868f6ef9cfe750cd685d09540ef

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
        this.myTween = gsap.to(this.myElement, {
            opacity: 1,
            duration: 0.5,
            delay: 0.5
        });
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
                    <div
                        className={styles.buttonStyle}
                        onClick={this.props.signIn}
                        ref={div => this.myElement.push(div)}
                    >
                        <LargeButton text={`Sign up with Google`} />
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
