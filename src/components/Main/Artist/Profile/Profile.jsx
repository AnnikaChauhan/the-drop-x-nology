import React, { Component } from "react";
import styles from "./Profile.module.scss";
// import image from "../../../../static/images/sampleimage.jfif";
import image from "../../../../static/images/ei.jpg";
import LargeButton from "../../../Utility/Buttons/LargeButton";
import { Link } from "@reach/router";
import StatusBar from "../../../Utility/StatusBar";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default class Profile extends Component {
    render() {
        return (
            <section className={styles.artistProfileWrapper}>

                <div className={styles.imageProfileWrapper}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.imgWrapper}>
                            <img src={image} alt="Artist"></img>
                        </div>
                        <div className={styles.editBio}>
                            <p>Edit Bio</p>
                        </div>
                        <div className={styles.artistWrapper}>
                            RICKY CHURCHES
                    </div>
                    </div>
                </div>
                <div className={styles.textAndRelease}>
                    <div className={styles.manageContain}>
                        <p>Manage Releases</p>
                    </div>
                    <div className={styles.releaseContain}>
                        {/* <StatusBar title={"Release Title"} status={"released"} className={styles.boxx} /> */}
                        <Tabs defaultActiveKey="profile" id="profile" className={styles.tabsss}>
                            <Tab eventKey="profile" title="Upcoming">
                                <StatusBar />
                                <StatusBar />
                                <StatusBar />
                                <StatusBar />
                            </Tab>
                            <Tab eventKey="home" title="Archive" className={styles.tab1}>

                                <StatusBar />
                                <StatusBar />
                            </Tab>
                        </Tabs>
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


// add followers and latest releases on upper for more content as suggested