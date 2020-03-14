import React, { Component } from "react";
import styles from "./FollowButton.module.scss";

// Based on MIT license of https://codepen.io/ChrisJohnson/pen/PNjgpq
export default class FollowButton extends Component {
    state = {
        active: false
    };

    toggleActive = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        return (
            <div className={styles.FollowButton}>
                <div
                    className={
                        this.state.active
                            ? `${styles.follow} ${styles.active}`
                            : `${styles.follow}`
                    }
                    onClick={this.toggleActive}
                >
                    <svg x="0px" y="0px" viewBox="0 0 70 60">
                        <g className={styles.inner}>
                            <circle cx="35" cy="30" r="12" />
                        </g>
                        <g className={styles.outer}>
                            <path d="M65,8.5L25.9,47.8c0,0-17.6-17.1-19.9-20.2 C3.3,21.6,15.8,7,32.2,11.2C45.7,14.7,50.5,25,50.5,32C50.5,42.5,39,53.7,30,53.7c-17.2,0-26.1-9-26.1-23.7S17.8,3.3,35,3.3 c17.2,0,31.1,12,31.1,26.7" />
                        </g>
                    </svg>
                </div>
                <p>Follow</p>
            </div>
        );
    }
}
