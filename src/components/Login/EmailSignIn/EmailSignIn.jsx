import React, { Component } from "react";
import styles from "./EmailSignIn.module.scss";
import LargeButton from "../../Utility/Buttons/LargeButton";

export default class EmailSignIn extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.signInWithEmailAndPassword}>
          <input
            className={styles.inputSelector}
            type="email"
            name="email"
            value={this.props.loginFormData.email} 
            placeholder="Email"
            onChange={this.props.handleLoginDetails}
            /> <br/>
          <input 
            className={styles.box}
            type="password" 
            name="password"
            value={this.props.loginFormData.password} 
            placeholder="Password"
            onChange={this.props.handleLoginDetails}
             /> <br/>
          <LargeButton 
            text="Login with email"
            handleClick={this.props.signInWithEmailAndPassword} 
            />
        </form>
      </>
    );
  }
}