import React, { Component } from "react";
import styles from "./ReleaseArchive.module.scss";



export default class ReleaseArchive extends Component {
    render() {
        return (
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.archiveData}>Release title</div>
                    <div className={`${styles.archiveData} ${styles.green}`}>active</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.archiveData}>Release title</div>
                    <div className={styles.archiveData}>draft</div>
                </div>
            </section>
        )
    }
}