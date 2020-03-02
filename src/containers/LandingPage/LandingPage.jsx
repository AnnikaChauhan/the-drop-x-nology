import React from "react";
import styles from "./LandingPage.module.scss";

function LandingPage() {
        return (
            <section className={styles.container}>
                <div className={styles.mainlogo}></div>
                <div className={styles.left}>
                    <div className={styles.wrapper}>
                        {/* <div className={styles.logoimg}></div> */}
                        <p>I'm an:</p>
                        <h2>Artist</h2>
                    </div>
                </div>
                
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        {/* <div className={styles.logoimg}></div> */}
                        <p>I'm a:</p>
                        <h2>Fan</h2>
                    </div>
                </div>
            </section>
        )
}

export default LandingPage;