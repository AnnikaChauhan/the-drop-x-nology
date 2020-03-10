import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../static/images/logo-white.png";
import navStyleData from "../../static/data/navStyleData.js";
import { slide as Menu } from "react-burger-menu";
import NavItem from "./NavItem";

class Navbar extends Component {
    state = {
        width: window.innerWidth
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
                    <NavItem path={""} name={"Dashboard"} />
                    <NavItem path={"profile"} name={"User Profile"} />
                    <NavItem path={"contact"} name={"Help and Contact"} />
                    <NavItem path={"legal"} name={"Legal"} />
                    <NavItem path={"feedback"} name={"Feedback"} />
                    <NavItem path={"/"} name={"Logout"} />
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
