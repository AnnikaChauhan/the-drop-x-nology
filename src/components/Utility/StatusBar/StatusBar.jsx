import React, { Component } from "react";
import styles from "./StatusBar.module.scss";
import { globalHistory } from "@reach/router";

export default class StatusBar extends Component {
    editRelease = () => {
        globalHistory.navigate("dashboard/add-release");
    };

    get status() {
        let classes = `${styles.status}`;
        let content = ``;

        switch (this.props.release.status) {
            case "Live":
                content = <i className={`fas fa-circle ${styles.live}`}></i>;
                classes += ` ${styles.live}`;
                break;
            case "Draft":
                content = (
                    <i
                        className={`fas fa-pencil-alt ${styles.edit}`}
                        onClick={this.editRelease}
                    ></i>
                );
                break;
            default:
                break;
        }

        return (
            <div className={classes}>
                {this.props.release.status}
                {content}
            </div>
        );
    }

    render() {
        return (
            <article className={styles.StatusBar}>
                <div className={styles.title}>{this.props.release.title}</div>
                <div className={styles.type}>
                    {this.props.release.releaseType}
                </div>
                {this.status}
            </article>
        );
    }
}
