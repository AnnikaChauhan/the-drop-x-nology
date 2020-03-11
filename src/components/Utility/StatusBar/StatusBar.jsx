import React, { Component } from "react";
import styles from "./StatusBar.module.scss";

export default class StatusBar extends Component {
    get activeClass() {
        return this.props.status === "active" ? `${styles.active}` : ``;
    }

    render() {
        return (
            <article className={styles.StatusBar}>
                <div className={styles.wrap1}>
                    <div className={styles.albumImg}> </div>
                    {/* <div className={styles.archiveData}>{this.props.title}</div> */}
                    <div className={styles.archiveData}>ALBUM NAME</div>
                </div>
                <div className={`${styles.archiveData} ${this.activeClass}`}>
                    {this.props.status}RELEASE
                </div>
            </article>
        );
    }
}
