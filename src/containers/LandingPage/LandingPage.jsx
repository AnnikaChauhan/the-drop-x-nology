import React, { Component } from "react";
import styles from "./LandingPage.module.scss";

export default class LandingPage extends Component {
    render() {
        console.log(this.props.user);
        return (
            <section className={styles.container}>
                <div className={styles.mainlogo}>
                    <div className={styles.logoimg1}></div>
                    <div className={styles.logotext}>Choose your account type</div>
                </div>

                <div className={styles.leftArtistWrapper}>
                    <div className={styles.infoWrapper}>
                        <h2>Artists</h2>
                        <h1>Plan your next release.</h1>
                        <h3>Build anticipation. Timing is everything.</h3>
                        <p className={styles.mobileText}>
                            Tap here if you're an Artist
                        </p>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.infoWrapper}>
                        <h2>Fans</h2>
                        <h1>Be the first to know.</h1>
                        <h3>Get excited. Share experiences.</h3>
                        <p className={styles.mobileText}>
                            Tap here if you're a fan
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
