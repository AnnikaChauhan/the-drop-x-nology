import React, { Component } from "react";
import styles from "./LandingPage.module.scss";
import { globalHistory } from "@reach/router";
import { firestore } from '../../firebase';


export default class LandingPage extends Component {

    handleSubmitArtist = () => {
        if (this.props.additionalUserInfo.isNewUser) {
            firestore
                .collection("Artists")
                .add({
                    UID: this.props.user.uid,
                    type: "artist",
                    artistName: this.props.user.displayName,
                    artistProfileImage: this.props.user.photoURL,
                    bio: ""
                })
                .then(() => {
                    globalHistory.navigate("/private/artist/home");
                })
        } else {
            globalHistory.navigate("/private/artist/home");
        }
    }

    handleSubmitFan = () => {
        if (this.props.additionalUserInfo.isNewUser) {
            firestore
                .collection("Fans")
                .add({
                    UID: this.props.user.uid,
                    type: "fan",
                    followedArtists: "",
                    userName: this.props.user.displayName,
                })
                .then(() => {
                    globalHistory.navigate("/private/fan/home");
                })
            } else {
                globalHistory.navigate("/private/fan/home");
            }
    }

    render() {
        console.log(this.props.user);
        return (
            <section className={styles.container}>
                <div className={styles.mainlogo}>
                    <div className={styles.logoimg1}></div>
                    <div className={styles.logotext}>Choose your account type</div>
                </div>

                <div className={styles.leftArtistWrapper} onClick={this.handleSubmitArtist}>
                    <div className={styles.infoWrapper}>
                        <h2>Artists</h2>
                        <h1>Plan your next release.</h1>
                        <h3>Build anticipation. Timing is everything.</h3>
                        <p className={styles.mobileText}>
                            Tap here if you're an Artist
                        </p>
                    </div>
                </div>

                <div className={styles.right} onClick={this.handleSubmitFan}>
                    <div className={styles.infoWrapper}>
                        <h2>Fans</h2>
                        <h1>Be the first to know.</h1>
                        <h3>Get excited. Share experiences.</h3>
                        <p className={styles.mobileText}>
                            Tap here if you're a fan
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
