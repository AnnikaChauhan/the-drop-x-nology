import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../static/images/logo-white.png";

class Navbar extends Component {
    render() {
        return (
            <div className={styles.Nav}>
                <nav>
                    <img src={logo} alt="The Drop" />
                    <ul>
                        <li>
                            <a href="">Dashboard</a>
                        </li>
                        <li>
                            <a href="">User Profile</a>
                        </li>
                        <li>
                            <a href="">Help and Contact</a>
                        </li>
                        <li>
                            <a href="">Legal</a>
                        </li>
                        <li>
                            <a href="">Feedback</a>
                        </li>
                        <li>
                            <a href="">Logout</a>
                        </li>
                    </ul>
                </nav>
                {/* Overlay required for Main to position itself in document flow with a fixed Navbar */}
                <div className={styles.overlay} />
            </div>
        );
    }
}

export default Navbar;
