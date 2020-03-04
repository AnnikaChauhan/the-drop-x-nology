import React, { Component } from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";

export default class NavItem extends Component {
    render() {
        return (
            <p className={styles.NavItem}>
                <Link to={this.props.path}>{this.props.name}</Link>
            </p>
        );
    }
}
