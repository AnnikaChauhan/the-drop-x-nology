import React, { Component } from "react";
import styles from "./ManageReleases.module.scss";

export default class ManageReleases extends Component {

    render() {
        return(
            <section className={styles.wrapper}>
                <h2>Manage Releases</h2>
                <div className={styles.container}>
                    <div className={styles.releaseData}>Release Title 1</div>
                    <div className={styles.releaseData}>Draft</div>
                </div>
                <div className={styles.container1}>
                    <div className={styles.releaseData}>Release Title 2</div>
                    <div className={`${styles.releaseData} ${styles.active}`}>Live</div>
                </div>
            </section>
        )
    }
}
