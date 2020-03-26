import React, { Component } from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";

export default class NavItem extends Component {

    render() {
        if (!this.props.disabled) {
            return (
                <p className={styles.NavItem}>
                    <Link
                        to={this.props.path}
                        onClick={this.props.toggleMenu}
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
        } else {
            return (
                <p className={styles.NavItem} onClick={this.props.signOut}>
                    <a>{this.props.name}</a>
                </p>
            )
        }

    }
}
