import React, { Component } from "react";
import styles from "./PreviewReleases.module.scss";
import Header from "../../../../Utility/Header";
import { firestore } from "../../../../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSave,
    faPlay,
    faMusic,
    faTshirt,
    faUser
} from "@fortawesome/free-solid-svg-icons";

export default class PreviewReleases extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        const id = window.location.pathname.substring(
            window.location.pathname.lastIndexOf("/") + 1
        );
        firestore
            .collection("Releases")
            .doc(id)
            .get()
            .then(info => {
                this.setState({ data: info.data() });
            });
    }

    render() {
        if (!this.state.data) return <div>I'm searching!</div>;
        return (
            <section className={styles.wrapper}>
                <Header title={"Preview Release"} />
                <div className={styles.video}>
                    <FontAwesomeIcon
                        className={styles.play}
                        icon={faPlay}
                        size="2x"
                    />
                    <img src={this.state.data.Artwork} alt="Artwork" />
                    <div className={styles.title}>
                        <h4>{this.state.data.ReleaseName}</h4>
                        <p>
                            {this.state.data.ReleaseType} by{" "}
                            {this.state.data.Artist}
                        </p>
                    </div>
                </div>
                <div className={styles.information}>
                    <div className={styles.links}>
                        <div>
                            <h4>Drops in</h4>
                            <h1>12 Days</h1>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faSave} size="2x" />
                                <p>Pre-save</p>
                            </div>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faTshirt} size="2x" />
                                <p>Merch</p>
                            </div>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faMusic} size="2x" />
                                <p>Music Store</p>
                            </div>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faUser} size="2x" />
                                <p>Artist Profile</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.descriptionsection}>
                        <h4>Description</h4>
                        <p className={styles.description}>
                            {this.state.data.Description}
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
