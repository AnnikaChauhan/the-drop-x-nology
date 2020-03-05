import React, { Component } from "react";
import styles from "./Profile.module.scss";
import image from "../../../../static/images/sampleimage.jfif";
import LargeButton from "../../../Utility/Buttons/LargeButton";
import { Link } from "@reach/router";

export default class Profile extends Component {
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
                        <Link to="add-release">
                            <LargeButton text={"Add Release"} />
                        </Link>
                    </div>
                </div>
                <div className={styles.buttonsWrapper}>
                    <Link to="releases">
                        <LargeButton text={"Manage Releases"} />
                    </Link>

                    <Link to="/artist/profile">
                        <LargeButton text={"Artist Bio"} />
                    </Link>

                    <Link to="archive">
                        <LargeButton text={"Release Archive"} />
                    </Link>
                </div>
            </section>
        );
    }
}
