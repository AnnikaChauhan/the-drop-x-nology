import React, { Component } from "react";
import styles from "./LandingPage.module.scss";

class LandingPage extends Component {
    render() {
        return (
            <section className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logoimg}></div>
                    <h2>Artists</h2>
                </div>
                
                <div className={styles.right}>
                    <div className={styles.logoimg}></div>
                    <h2>Fans</h2>
                </div>
            </section>
        )
    }
}

export default LandingPage;