import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../static/images/logo-white.png';
import navStyleData from '../../static/data/navStyleData.js';
import { slide as Menu } from 'react-burger-menu';

class Navbar extends Component {
    showSettings (event) {
        event.preventDefault();
      }

    render() {        
        if (window.innerWidth <= 768) {
            return (
                <Menu 
                    noOverlay 
                    disableOverlayClick 
                    disableAutoFocus
                    styles={navStyleData} 
                    width={ "100%" }>
                    <img src={logo} />
                    <ul>
                        <li><a id="dashboard" className="menu-item" href=''>Dashboard</a></li>
                        <li><a id="user" className="menu-item" href=''>User Profile</a></li>
                        <li><a id="help" className="menu-item" href=''>Help and Contact</a></li>
                        <li><a id="legal" className="menu-item" href=''>Legal</a></li>
                        <li><a id="feedback" className="menu-item" href=''>Feedback</a></li>
                        <li><a id="logout" className="menu-item" href=''>Logout</a></li>
                        <li><a onClick= { this.showSettings } className="menu-item--small" href=''></a></li>
                    </ul>
                </Menu>)
        } else {
            return (
                <div className={styles.Nav}>
                    <nav>
                        <img src={logo} />
                        <ul>
                            <li><a id="dashboard" className="menu-item" href=''>Dashboard</a></li>
                            <li><a id="user" className="menu-item" href=''>User Profile</a></li>
                            <li><a id="help" className="menu-item" href=''>Help and Contact</a></li>
                            <li><a id="legal" className="menu-item" href=''>Legal</a></li>
                            <li><a id="feedback" className="menu-item" href=''>Feedback</a></li>
                            <li><a id="logout" className="menu-item" href=''>Logout</a></li>
                            <li><a onClick= { this.showSettings } className="menu-item--small" href=''></a></li>
                        </ul>
                    </nav>
                    <div className={styles.overlay} />
                </div>
            );
        }
    }
}

export default Navbar;
