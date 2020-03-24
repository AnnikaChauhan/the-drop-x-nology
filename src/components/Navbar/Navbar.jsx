import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../static/images/logo-white.png";
import NavItem from "./NavItem";
import { Link } from "@reach/router";

const navItems = {
    Home: "home",
    Account: "account",
    Help: "help",
    Feedback: "feedback",
    Logout: "/"
};

class Navbar extends Component {
    state = {
        width: window.innerWidth,
        navItems,
        menuOpen: false
    };

    componentDidMount() {
        window.addEventListener("resize", () => this.handleResize());
    }

    handleResize() {
        this.setState({ width: window.innerWidth });
    }

    showSettings = event => {
        event.preventDefault();
    };

    toggleMenu = event => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    get links() {
        return Object.entries(this.state.navItems).map((item, index) => {
            return (
                <NavItem
                    onClick={ item[0] === "Logout" ? this.props.signOut() : this.highlightNavItem }
                    name={item[0]}
                    path={item[1]}
                    toggleMenu={this.toggleMenu}
                    key={index}

                />
            );
        });
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
        return (
            <div>
                <nav
                    className={
                        this.state.menuOpen
                            ? `${styles.Nav} ${styles.open}`
                            : `${styles.Nav}`
                    }
                >
                    <div
                        href="#"
                        className={styles.icon}
                        onClick={this.toggleMenu}
                    />
                    <div>
                        <img src={logo} alt="The Drop" />
                    </div>
                    <div className={styles.menu}>
                        <ul className={styles.links}>{this.links}</ul>
                        {this.footer}
                    </div>
                </nav>
                <div className={styles.overlay} />
            </div>
        );
    }
}

export default Navbar;
