import React, { Component } from 'react';
import styles from "../../Login/EmailSignIn/EmailSignIn.module.scss";
import LargeButton from "../../Utility/Buttons/LargeButton/LargeButton";

export default class EmailSignUp extends Component {
    render() {
        return (
            <>
                <form onSubmit={this.props.signUp}>
                    <input
                        type="email"
                        name="email"
                        value={this.props.loginFormData.email}
                        placeholder="Email"
                        onChange={this.props.handleLoginDetails}
                    /> <br />
                    <input
                        className={styles.box}
                        type="password"
                        name="password"
                        value={this.props.loginFormData.password}
                        placeholder="Password"
                        onChange={this.props.handleLoginDetails}
                    /> <br />
                    <LargeButton
                        text="Sign Up with email"
                        handleClick={this.props.signUp}
                    />
                </form>
            </>
        );
    }
}