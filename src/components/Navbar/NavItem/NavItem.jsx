import React, { Component } from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";

export default class NavItem extends Component {
    render() {
        return (
            <p className={styles.NavItem}>
                <Link
                    to={this.props.path}
                    getProps={({ isCurrent }) => {
                         return {
                            style: {
                                color: isCurrent ? "#ff007e" : "white"
                            }
                        };
                    }}
                    >
                    {this.props.name}
                </Link>
            </p>
        );
    }
}

{/* <Link

getProps={({ isCurrent }) => {
  // the object returned here is passed to the
  // anchor element's props
  return {
    style: {
      color: isCurrent ? "red" : "blue"
    }
  };
}}
/> */}