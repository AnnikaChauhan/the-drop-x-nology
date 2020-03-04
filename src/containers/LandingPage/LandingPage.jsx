import React from "react";
import styles from "./LandingPage.module.scss";

function LandingPage() {
    return (
        <section className={styles.container}>
            <div className={styles.mainlogo}></div>
            <div className={styles.leftArtistWrapper}>
                <div className={styles.infoWrapper}>
                    <p>for</p>
                    <h2>Artists</h2>
                    <h1>Plan your next release.</h1>
                    <h3>Build anticipation. Timing is everything.</h3>
                    <button>SETUP ARTIST ACCOUNT</button>
                    <button className={styles.loginButton}>Log In</button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.infoWrapper}>
                    <p>for</p>
                    <h2>Fans</h2>
                    <h1>Be the first to know.</h1>
                    <h3>Get excited. Share experiences.</h3>
                    <button>SETUP FAN ACCOUNT</button>
                    <button>Log In</button>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;