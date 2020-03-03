import React, { Component } from "react";
import styles from "./ArtistProfile.module.scss";
import image from "../../../static/images/sampleimage.jfif";

export default class ArtistProfile extends Component {
    render() {
        return (
            <section className={styles.artistProfileWrapper}>
                <div className={styles.imageProfileWrapper}>
                    <div>
                        <img src={image}></img>
                    </div>
                    <div>
                        <h2>Artist Name</h2>
                    </div>
                </div>
                <div className={styles.dashboardParagraph}>
                    <p>Dashboard > Artist Name</p>
                </div>
                <div>
                    <button className={styles.addRelease}>Add Release</button>
                </div>
                <div className={styles.buttonsWrapper}>
                    <div >
                        <button className={styles.buttonBar}>Releases</button>
                    </div>
                    <div >
                        <button className={styles.buttonBar}>Artist Bio</button>
                    </div>
                    <div >
                        <button className={styles.buttonBar}>Release Archive</button>
                    </div>
                </div>

            </section>
        )
    }
}