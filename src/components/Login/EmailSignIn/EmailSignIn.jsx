import React, { Component } from "react";
import LargeButton from "../../Utility/Buttons/LargeButton";

export default class EmailSignIn extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.signInWithEmailAndPassword}>
          <input 
            type="email"
            name="email"
            value={this.props.loginFormData.email} 
            placeholder="Your email"
            onChange={this.props.handleLoginDetails}
            />
          <input 
            type="password" 
            name="password"
            value={this.props.loginFormData.password} 
            placeholder="Enter password"
            onChange={this.props.handleLoginDetails}
             />
          <LargeButton 
            link="" 
            text="Sign in with email"
            onClick={this.props.signInWithEmailAndPassword} 
            />
        </form>
      </>
    );
  }
}