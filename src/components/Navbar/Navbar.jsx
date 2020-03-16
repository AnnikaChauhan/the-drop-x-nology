import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../static/images/logo-white.png";
import navStyleData from "../../static/data/navStyleData.js";
import { slide as Menu } from "react-burger-menu";
import NavItem from "./NavItem";
import { Link } from "@reach/router";

const navItems = {
    Dashboard: "dashboard",
    "User Profile": "profile",
    "Help and Contact": "contact",
    Feedback: "feedback",
    Logout: "/"
};

class Navbar extends Component {
    state = {
        width: window.innerWidth,
        navItems
    };

    componentDidMount() {
        window.addEventListener("resize", () => this.handleResize());
    }

    handleResize() {
        this.setState({ width: window.innerWidth });
    }

    showSettings(event) {
        event.preventDefault();
    }

    get links() {
        return (
            <nav className={styles.Nav}>
                <img src={logo} alt="The Drop" />
                <ul>
                    {Object.entries(this.state.navItems).map((item, index) => {
                        return (
                            <NavItem
                                onClick={this.highlightNavItem}
                                path={item[1]}
                                name={item[0]}
                                key={index}
                            />
                        );
                    })}
                </ul>
                {this.footer}
            </nav>
        );
    }

    get footer() {
        return (
            <div className={styles.footer}>
                <Link to="legal">Legal</Link>
                <span> | </span>
                <Link to="policy">Privacy Policy</Link>
                <p>&copy; Copyright 2020 | The Drop Music Ltd.</p>
            </div>
        );
    }

    render() {
        if (this.state.width <= 768) {
            return (
                <Menu
                    noOverlay
                    disableOverlayClick
                    disableAutoFocus
                    styles={navStyleData}
                    width={"100%"}
                >
                    {this.links}
                </Menu>
            );
        } else {
            return (
                <div>
                    {this.links}
                    <div className={styles.overlay} />
                </div>
            );
        }
    }
}

export default Navbar;
