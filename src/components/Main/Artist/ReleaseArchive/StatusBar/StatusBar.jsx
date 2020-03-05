import React, { Component } from "react"
import styles from "./StatusBar.module.scss";

export default class StatusBar extends Component {
    get activeClass() {
        return (this.props.status === 'active')
            ? `${styles.active}`
            : ``;
    }

    render() {
        return (
            <article>
                <div className={styles.archiveData}>{this.props.title}</div>
                <div className={`${styles.archiveData} ${this.activeClass}`}>{this.props.status}</div>
            </article>
        )
    }
}