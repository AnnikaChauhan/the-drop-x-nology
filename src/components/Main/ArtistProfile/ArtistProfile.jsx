import React, { Component } from "react";
import styles from "./ArtistProfile.module.scss";
import image from "../../../static/images/sampleimage.jfif";
import LargeButton from "../../Utility/Button/LargeButton";

export default class ArtistProfile extends Component {
    render() {
        return (
            <section className={styles.artistProfileWrapper}>
                <div className={styles.imageProfileWrapper}>
                    <div className={styles.imgWapper}>
                        <img
                            src={image}
                            className={styles.pic}
                            alt="Artist"
                        ></img>
                    </div>
                    <div className={styles.artistWrapper}>
                        <h2>Artist Name</h2>
                    </div>
                </div>
                <div className={styles.textAndRelease}>
                    <div className={styles.dashboardParagraph}>
                        <p>Dashboard > Artist Name</p>
                    </div>
                    <div>
                        <button className={styles.addRelease}>
                            Add Release
                        </button>
                    </div>
                </div>
                <div className={styles.buttonsWrapper}>
                    <button className={styles.buttonBar}>Releases</button>

                    <button className={styles.buttonBar}>Artist Bio</button>

                    <button className={styles.buttonBar}>
                        Release Archive
                    </button>
                </div>
            </section>
        );
    }
}
