import React, { Component } from "react";
import styles from "./PreviewReleases.module.scss";
import Header from "../../../../Utility/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSave,
    faPlay,
    faMusic,
    faTshirt,
    faUser
} from "@fortawesome/free-solid-svg-icons";

export default class PreviewReleases extends Component {
    render() {
        return (
            <section className={styles.wrapper}>
                <Header title={"Preview Release"} />
                <div className={styles.video}>
                    <FontAwesomeIcon
                        className={styles.play}
                        icon={faPlay}
                        size="2x"
                    />
                    <img src={this.props.Release.Artwork} alt="Artwork" />
                    <div className={styles.title}>
                        <h4>{this.props.Release.ReleaseName}</h4>
                        <p>
                            {this.props.Release.ReleaseType} by{" "}
                            {this.props.Release.Artist}
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
                            {this.props.Release.Description}
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
