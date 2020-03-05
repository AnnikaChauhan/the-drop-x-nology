import React, { Component } from "react";
import styles from "./ManageReleases.module.scss";
import StatusBar from "../../../Utility/StatusBar";

export default class ManageReleases extends Component {
    render() {
        return (
            <section className={styles.wrapper}>
                <h2>Manage Releases</h2>
                <StatusBar title={"Release Title"} status={"active"} />
                <StatusBar title={"Release Title"} status={"draft"} />
            </section>
        );
    }
}
