import React, {Component} from "react";
import { globalHistory, Redirect } from "@reach/router";

export default class PrivateRoutes extends Component {
    render(){
        if(!this.props.user){
            globalHistory.navigate("/");
            return null;
        } else {
            return this.props.children;
        }
    }
}