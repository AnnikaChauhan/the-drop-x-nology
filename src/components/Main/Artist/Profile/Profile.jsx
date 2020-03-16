import React, { Component } from "react";
import styles from "./Profile.module.scss";
// import image from "../../../../static/images/sampleimage.jfif";
import image from "../../../../static/images/jiji.PNG";
import LargeButton from "../../../Utility/Buttons/LargeButton";
import { Link } from "@reach/router";
import StatusBar from "../../../Utility/StatusBar";
import Header from "../../../Utility/Header";
import SmallButton from "../../../Utility/Buttons/SmallButton/SmallButton";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default class Profile extends Component {
    render() {
        return (
            <section className={styles.artistProfileWrapper}>
                <div className={styles.topContain}>
                    <div className={styles.header}>
                        <Header title={"Dashboard"} className={styles.title} />
                    </div>
                    <div className={styles.manageContain}>
                        <div><p>Manage Bio</p></div>
                        <div><p>Manage Users</p></div>
                    </div>
                </div>


                <div className={styles.midContain}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.imgContain}>
                            <img src={image} alt="Artist"></img>
                        </div>
                        <div className={styles.nameContain}>
                            <div>
                                JONNY 'JAVASCRIPT' JI
                            </div>
                        </div>
                    </div>
                    <div className={styles.createRelease}>
                        <div>
                            <SmallButton text={"Create Release"} />
                        </div>
                    </div>
                </div>

                <div className={styles.tabContain}>
                    <Tabs defaultActiveKey="profile" id="profile" className={styles.tabsss}>
                        <Tab eventKey="profile" title="Releases" className={styles.tabs1}>
                            <StatusBar />
                            <StatusBar />
                            <StatusBar />
                            <StatusBar />
                        </Tab>
                        <Tab eventKey="home" title="Past Releases" className={styles.tab1}>
                            <StatusBar />
                            <StatusBar />
                        </Tab>
                    </Tabs>
                </div>

            </section>
        );
    }
}


// add followers and latest releases on upper for more content as suggested