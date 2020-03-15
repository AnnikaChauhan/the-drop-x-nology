import React, { Component } from "react";
import styles from "./Profile.module.scss";
import Header from "../../../Utility/Header";
import Tabs from "../../../Utility/Tabs";
import StatusBar from "../../../Utility/StatusBar";
import { Link } from "@reach/router";

export default class Profile extends Component {
    render() {
        return (
            <section className={styles.Profile}>
                <Header title={"Dashboard"} className={styles.title} />
                <div className={styles.header}>
                    <img
                        src="https://i.scdn.co/image/07731d62846074c691f9dad6edaf09c271c39fbc"
                        alt="Artist Profile"
                    />
                    <div className={styles.details}>
                        <h2>Archie Hamilton</h2>
                        <p>116 Followers</p>
                    </div>
                </div>

                <Tabs
                    tabs={["Releases", "Past Releases"]}
                    content={[
                        <>
                            <Link to={"add-release"}>+ Create New Release</Link>
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
            </section>
        );
    }
}

// add followers and latest releases on upper for more content as suggested
