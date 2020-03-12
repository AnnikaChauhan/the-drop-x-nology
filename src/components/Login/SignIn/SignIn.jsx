import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import LargeButton from "../../Utility/Buttons/LargeButton";
import { Link } from "@reach/router";
import { gsap } from 'gsap';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.myElement = [];
        this.myTween = null;
    }

    componentDidMount() {
        this.myTween = gsap.to(this.myElement, {opacity: 1, duration: 0.5, delay: 0.5} )
    }

    render() {
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
                </div>
            </section>
        );
    }
}
export default SignIn;