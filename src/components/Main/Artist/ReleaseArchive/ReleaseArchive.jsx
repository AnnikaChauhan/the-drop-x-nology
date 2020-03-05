import React, { Component } from "react";
import styles from "./ReleaseArchive.module.scss";
import StatusBar from "../../Utility/StatusBar";

export default class ReleaseArchive extends Component {
    render() {
        return (
            <section className={styles.wrapper}>
                <h2>Release Archive</h2>
<<<<<<< HEAD:src/components/Main/Artist/ReleaseArchive/ReleaseArchive.jsx
                <StatusBar
                    title={"Release TitleFormatting"}
                    status={"active"}
                />
                <StatusBar title={"Release TitleFormatting"} status={"draft"} />
=======
                <StatusBar title={"Release Title"} status={"released"} />
                <StatusBar title={"Release Title"} status={"released"} />
>>>>>>> 69f983d0dbdc2ef1663a4f68ae30ca9acc3bfb79:src/components/Main/ReleaseArchive/ReleaseArchive.jsx
            </section>
        );
    }
}
