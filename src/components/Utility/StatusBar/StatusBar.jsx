import React, { Component } from "react";
import styles from "./StatusBar.module.scss";

export default class StatusBar extends Component {
    get activeClass() {
        return this.props.status === "active" ? `${styles.active}` : ``;
    }

    render() {
        return (
            <article className={styles.StatusBar}>
                <div className={styles.columnOne}>
                    {/* <div className={styles.archiveData}>{this.props.title}</div> */}
                    <div className={styles.archiveData}>ALBUM NAME</div>
                </div>

                <div className={`${styles.columnTwo} ${this.activeClass}`}>
                    {this.props.status}RELEASE
                </div>

                <div className={styles.columnThree}>DRAFT</div>
            </article>
        );
    }
}
