import React, { Component } from "react";
import styles from "./Profile.module.scss";
import image from "../../../../static/images/jiji.PNG";
import Header from "../../../Utility/Header";
import SmallButton from "../../../Utility/Buttons/SmallButton";
import Tabs from "../../../Utility/Tabs";
import StatusBar from "../../../Utility/StatusBar";

export default class Profile extends Component {
    render() {
        return (
            <section className={styles.artistProfileWrapper}>
                <div className={styles.topContain}>
                    <div className={styles.header}>
                        <Header title={"Dashboard"} className={styles.title} />
                    </div>
                    <div className={styles.manageContain}>
                        <div>
                            <p>Manage Bio</p>
                        </div>
                        <div>
                            <p>Manage Users</p>
                        </div>
                    </div>
                </div>

                <div className={styles.midContain}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.imgContain}>
                            <img src={image} alt="Artist"></img>
                        </div>
                        <div className={styles.nameContain}>
                            <div>JONNY 'JAVASCRIPT' JI</div>
                        </div>
                    </div>
                    <div className={styles.createRelease}>
                        <div>
                            <SmallButton text={"Create Release"} />
                        </div>
                    </div>
                </div>

                <Tabs
                    tabs={["Releases", "Past Releases"]}
                    content={[
                        <>
                            <StatusBar
                                title={"Release Title 1"}
                                type={"Single"}
                                status={"Draft"}
                            />
                            <StatusBar
                                title={"Release Title 2"}
                                type={"EP"}
                                status={"Live"}
                            />
                            <StatusBar
                                title={"Release Title 3"}
                                type={"Album"}
                                status={"Live"}
                            />
                        </>,
                        <>
                            <StatusBar
                                title={"Release Title 4"}
                                type={"Album"}
                                status={"Released"}
                            />
                            <StatusBar
                                title={"Release Title 5"}
                                type={"Merch"}
                                status={"Released"}
                            />
                            <StatusBar
                                title={"Release Title 6"}
                                type={"EP"}
                                status={"Released"}
                            />
                            <StatusBar
                                title={"Release Title 7"}
                                type={"Single"}
                                status={"Released"}
                            />
                        </>
                    ]}
                />

                {/* <div className={styles.tabContain}>
                    <Tabs
                        defaultActiveKey="profile"
                        id="profile"
                        className={styles.tabsss}
                    >
                        <Tab eventKey="profile" title="Releases">
                            <StatusBar />
                            <StatusBar />
                            <StatusBar />
                            <StatusBar />
                        </Tab>
                        <Tab
                            eventKey="home"
                            title="Past Releases"
                            className={styles.tab1}
                        >
                            <StatusBar />
                            <StatusBar />
                        </Tab>
                    </Tabs>
                </div> */}
            </section>
        );
    }
}

// add followers and latest releases on upper for more content as suggested
