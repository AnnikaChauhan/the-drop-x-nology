import React, { Component } from "react";
import LargeButton from "../../Utility/Buttons/LargeButton";

export default class EmailSignIn extends Component {
  state = {
    user: null,
    loginFormData: {
        email: "",
        password: ""
    },
  };
  
  handleInputChange = (event) => {
    this.setState({
        loginFormData: {
            ...this.state.loginFormData,
                [event.target.name]: event.target.value
          }
    })
  }    

  render() {
    console.log(this.state.loginFormData);
    return (
      <>
        <form onSubmit={this.props.signInWithEmailAndPassword}>
          <input 
            type="email"
            name="email"
            value={this.state.loginFormData.email} 
            placeholder="Your email"
            onChange={this.handleInputChange}
            />
          <input 
            type="password" 
            name="password"
            value={this.state.loginFormData.password} 
            placeholder="Enter password"
            onChange={this.handleInputChange}
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