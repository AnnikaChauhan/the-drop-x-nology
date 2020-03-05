import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import LargeButton from "../../Utility/Buttons/LargeButton";
import { Link } from "@reach/router";

class SignIn extends Component {
    render() {
        const gText = <span>Google</span>;
        return (
            <section className={styles.SignInContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.comet1}></div>
                    <div className={styles.buttonStyle}>
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
