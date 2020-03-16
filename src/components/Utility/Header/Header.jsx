import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
    render() {
        return (
            <div className={styles.DashboardTitle}>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

export default Header;
