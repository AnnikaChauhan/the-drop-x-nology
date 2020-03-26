import React, { Component } from "react";
import styles from "./LandingPage.module.scss";
import { globalHistory } from "@reach/router";
import { firestore } from "../../firebase";

export default class LandingPage extends Component {
    handleSubmitArtist = () => {
        firestore
            .collection("Artists")
            .where("uid", "==", this.props.user.uid)
            .get()
            .then((query) => {
                if (query.docs.length === 1) {
                    globalHistory.navigate("/app/artist/home");
                } else {
                    firestore
                        .collection("Artists")
                        .add({
                            uid: this.props.user.uid,
                            type: "artist",
                            artistName: this.props.user.displayName,
                            artistProfileImage: this.props.user.photoURL,
                            bio: ""
                        })
                        .then(() => {
                            globalHistory.navigate("/app/artist/home");
                        })
                }
            })
    } 


    handleSubmitFan = () => {
        if (this.props.additionalUserInfo.isNewUser) {
            firestore
                .collection("Fans")
                .add({
                    uid: this.props.user.uid,
                    type: "fan",
                    followedArtists: "",
                    userName: this.props.user.displayName
                })
                .then(() => {
                    globalHistory.navigate("/connect-music");
                });
        } else {
            globalHistory.navigate("/app/fan/home");
        }
    };

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.mainlogo}>
                    <div className={styles.logoimg1}></div>
                    <div className={styles.logotext}>
                        Choose your account type
                    </div>
                </div>

                <div
                    className={styles.leftArtistWrapper}
                    onClick={this.handleSubmitArtist}
                >
                    <div className={styles.infoWrapper}>
                        <h1>Artists</h1>
                        <h2 className={styles.artistinfo}>
                            Plan your next release.
                        </h2>
                        <h3 className={styles.artistinfo}>
                            Build anticipation. Timing is everything.
                        </h3>
                        <p className={styles.mobileText}>
                            Tap here if you're an Artist
                        </p>
                    </div>
                </div>

                <div
                    className={styles.rightFanWrapper}
                    onClick={this.handleSubmitFan}
                >
                    <div className={styles.infoWrapper}>
                        <h1>Fans</h1>
                        <h2 className={styles.faninfo}>
                            Be the first to know.
                        </h2>
                        <h3 className={styles.faninfo}>
                            Get excited. Share experiences.
                        </h3>
                        <p className={styles.mobileText}>
                            Tap here if you're a Fan
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
