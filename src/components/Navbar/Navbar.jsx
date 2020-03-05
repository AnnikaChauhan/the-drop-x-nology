import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../static/images/logo-white.png";
import navStyleData from "../../static/data/navStyleData.js";
import { slide as Menu } from "react-burger-menu";

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
        <img src={logo} />
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
          <li>
            <a
              onClick={this.showSettings}
              className="menu-item--small"
              href=""
            ></a>
          </li>
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
