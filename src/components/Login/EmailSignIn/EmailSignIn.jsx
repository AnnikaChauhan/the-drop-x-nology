import React, { Component } from "react";
import LargeButton from "../../Utility/Buttons/LargeButton";

export default class EmailSignIn extends Component {
  render() {
    console.log(this.state);
    return (
      <>
        <form>
          <input 
            type="email"
            value={this.props.email} 
            placeholder="Your email"
            onChange = {this.props.email}
            />
          <input 
            type="password" 
            value={this.props.password} 
            placeholder="Enter password"
            onChange = {this.props.password}
             />
          <LargeButton 
            link="" 
            text="Sign in with email"
            onClick = {this.props.signInWithEmailAndPassword} 
            />
        </form>
      </>
    );
  }
}
