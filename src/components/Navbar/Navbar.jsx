import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../static/images/logo-white.png";
import navStyleData from "../../static/data/navStyleData.js";
import { slide as Menu } from "react-burger-menu";
import NavItem from "./NavItem";

const navItems = {
    "Dashboard": "dashboard",
    "User Profile": "profile",
    "Help and Contact": "contact",
    "Legal": "legal",
    "Feedback": "feedback",
    "Logout": "/"
}

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
            <nav>
                <img src={logo} alt="The Drop" />
                <ul>
                    {/* Ollie mapped this you lazy blighters */}
                    {Object.entries(this.state.navItems).map((item, index) => {
                        return (<NavItem onClick={this.highlightNavItem} path={item[1]} name={item[0]} />);
                    })}
                </ul>
            </nav>
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
                    width={"60%"}
                >
                    {this.links}
                </Menu>
            );
        } else {
            return (
                <div className={styles.Nav}>
                    {this.links}
                    <div className={styles.overlay} />
                </div>
                
            );
        }
    }
}

export default Navbar;

