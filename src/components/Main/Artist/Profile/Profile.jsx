import React, { Component } from "react";
import styles from "./Profile.module.scss";
// import image from "../../../../static/images/sampleimage.jfif";
import image from "../../../../static/images/ei.jpg";
import LargeButton from "../../../Utility/Buttons/LargeButton";
import { Link } from "@reach/router";
import StatusBar from "../../../Utility/StatusBar";

export default class Profile extends Component {
    render() {
        return (
            <section className={styles.artistProfileWrapper}>
                <div className={styles.imageProfileWrapper}>
                    <div className={styles.imgWrapper}>
                        <img src={image} alt="Artist"></img>
                    </div>
                    <div className={styles.editBio}>
                        <p>Edit Bio</p>
                    </div>
                    <div className={styles.artistWrapper}>
                        <h2>RICKY CHURCH</h2>
                    </div>
                </div>
                <div className={styles.textAndRelease}>
                    <div>
                        {/* <Link to="add-release">
                            <LargeButton text={"Add Release"} />
                        </Link> */}
                    </div>
                    <div className={styles.manageContain}>
                        <p>Manage Releases</p>
                    </div>
                    <div className={styles.releaseContain}>
                        <StatusBar title={"Release Title"} status={"released"} className={styles.boxx} />
                        <StatusBar title={"Release Title"} status={"released"} className={styles.boxx} />
                        <StatusBar title={"Release Title"} status={"released"} className={styles.boxx} />
                        <StatusBar title={"Release Title"} status={"released"} className={styles.boxx} />
                        <StatusBar title={"Release Title"} status={"released"} className={styles.boxx} />
                        {/* <div> </ReleaseArchive /> </div>\ */}
                    </div>
                </div>
                <div className={styles.buttonsWrapper}>
                    {/* <Link to="releases">
                        <LargeButton text={"Manage Releases"} />
                    </Link>

                    <Link to="/artist/profile">
                        <LargeButton text={"Artist Bio"} />
                    </Link>

                    <Link to="archive">
                        <LargeButton text={"Release Archive"} />
                    </Link> */}
                </div>
            </section>
        );
    }
}
