import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import LargeButton from '../../Utility/Button/LargeButton';




class SignIn extends Component {
    render() {
        const gText = (<span>Google</span>)
        return (
            <section className={styles.SignInContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.comet1}></div>
                    <div className={styles.buttonStyle}>
                        <LargeButton text={`Sign up with Google`} />
                    </div>
                </div>

            </section>
        )
    }
}

export default SignIn;