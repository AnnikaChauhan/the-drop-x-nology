import React, { Component } from "./node_modules/react";
import styles from "./ReleaseArchive.module.scss";
import ReleaseArchive from "./ReleaseArchive";


class ReleaseArchiveComponent extends Component {
    render() {
        return (
            <section className={styles.container}>
                <ReleaseArchive />
            
            </section>
        )
    }
}

export default ReleaseArchiveComponent;