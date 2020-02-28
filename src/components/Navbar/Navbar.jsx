import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../static/images/logo-white.png';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <img src={logo} />
                <ul>
                    <li><a href=''>Dashboard</a></li>
                    <li><a href=''>User Profile</a></li>
                    <li><a href=''>Help and Contact</a></li>
                    <li><a href=''>Legal</a></li>
                    <li><a href=''>Feedback</a></li>
                    <li><a href=''>Logout</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;