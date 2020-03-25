import React, { Component } from "react";
import styles from "./Profile.module.scss";
import Header from "../../../Utility/Header";
import Tabs from "../../../Utility/Tabs";
import StatusBar from "../../../Utility/StatusBar";
import SmallButton from "../../../Utility/Buttons/SmallButton";
import LoadingAnimation from "../../../Utility/LoadingAnimation";
import { firestore } from "../../../../firebase";
import { Link } from "@reach/router";

export default class Profile extends Component {
    state = {
        artist: null,
        releases: []
    };
    componentDidMount() {
        firestore
            .collection("Releases")
            .where("uid", "==", this.props.user.uid)
            .get()
            .then(query => {
                const releases = query.docs.map(doc => {
                    return Object.assign(doc.data(), {
                        releaseId: doc.id
                    });
                });
                this.setState({ releases });
            });

        firestore
            .collection("Artists")
            .where("uid", "==", this.props.user.uid)
            .get()
            .then(query => {
                const artist = query.docs[0].data();
                this.setState({ artist });
            });
    }

    render() {
        if (!this.state.artist) return <LoadingAnimation />;
        return (
            <section className={styles.Profile}>
                <Header
                    title={"Dashboard"}
                    className={styles.title}
                    subtitle={"Create, edit, preview and publish releases"}
                />
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <img
                            src={this.state.artist.artistProfileImage}
                            alt="Artist Profile"
                        />
                        <div className={styles.bio}>Edit Bio</div>
                    </div>
                    <div className={styles.header2}>
                        <div className={styles.details}>
                            <h2>{this.state.artist.artistName}</h2>
                            <p>116 Followers</p>
                        </div>
                    </div>
                </div>
                <Tabs
                    tabs={["Releases", "Past Releases"]}
                    content={[
                        <>
                            <Link to="add-release">
                                <SmallButton text="Create Release" />
                            </Link>
                            {this.state.releases.map((release, index) => {
                                return (
                                    <StatusBar release={release} key={index} />
                                );
                            })}
                        </>,
                        //     <>
                        <p>Coming soon..</p>
                        // <p>Past Releases</p>
                        //     {this.state.Releases.map((release, index) => {
                        //        return(<StatusBar
                        //      title={release.ReleaseName}
                        //      type={release.ReleaseType}
                        //      status={"Draft"}
                        //      Releases={release}
                        //      key={index}
                        //     />)
                        //     })}
                        //     </>
                    ]}
                />
            </section>
        );
    }
}
