import React, { Component } from "react";
import LargeButton from "../../Utility/Buttons/LargeButton";

export default class EmailSignIn extends Component {
  render() {
    // console.log(this.state.loginFormData);
    return (
      <>
        <form>
          <input 
            type="email"
            value={this.props.email} 
            />
          <input 
            type="password" 
            value={this.props.password} 
             />
          <LargeButton 
            link="" 
            text="Sign in with email"
            onChange = {this.props.signInWithEmailAndPassword} />
        </form>
      </>
    );
  }
}
