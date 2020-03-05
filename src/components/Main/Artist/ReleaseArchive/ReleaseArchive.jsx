import React, { Component } from "react";
import styles from "./ReleaseArchive.module.scss";
import StatusBar from "../../../Utility/StatusBar";

export default class ReleaseArchive extends Component {
    render() {
        return (
            <section className={styles.wrapper}>
                <h2>Release Archive</h2>
                <StatusBar title={"Release Title"} status={"released"} />
                <StatusBar title={"Release Title"} status={"released"} />
            </section>
        );
    }
}
