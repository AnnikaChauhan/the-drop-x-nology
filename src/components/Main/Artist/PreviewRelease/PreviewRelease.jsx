import React, { Component } from "react";
import styles from "./PreviewRelease.module.scss";
import Header from "../../../Utility/Header";
import LoadingAnimation from "../../../Utility/LoadingAnimation";
import { firestore } from "../../../../firebase";
import { navigate } from "@reach/router";  
import Countdown from "react-countdown";

export default class PreviewRelease extends Component {
    state = {
        data: null
    };

    goToArtist = () => {
        navigate("/private/fan/artist/" + this.state.data.uid, {
            state: {
                uid: this.state.data.uid
            }
        });
    }

    componentDidMount() {
        const id = window.location.pathname.substring(
            window.location.pathname.lastIndexOf("/") + 1
        );
        firestore
            .collection("Releases")
            .doc(id)
            .get()
            .then(info => {
                this.setState({ data: info.data() });
            })
            .then(() => {
                console.log(this.state.data.uid)
            })
    }

    render() {
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            let months = Math.floor(days / 31);
            let newDays = days - 31 * months;
            if (completed) {
                return <span>Released</span>;
            } else if (days > 31) {
                return (
                    <span>
                        {months} Months and {newDays} Days
                    </span>
                );
            } else if (days > 1) {
                return <span>{days} Days</span>;
            } else {
                return (
                    <span>
                        {hours}h {minutes}min and {seconds}s
                    </span>
                );
            }
        };

        if (!this.state.data) return <LoadingAnimation />;
        return (
            <section className={styles.PreviewRelease}>
                <Header
                    title={this.state.data.title}
                    subtitle={`${this.state.data.releaseType} by  ${this.state.data.artistName}`}
                />
                <div className={styles.media}>
                    <div className={styles.artwork}>
                        <img
                            src={this.state.data.artworkURL}
                            alt={`${this.state.data.artistName}'s artwork`}
                        />
                    </div>
                    <div className={styles.banner}>
                        <div className={styles.drop}>
                            <p>Drops in</p>
                            <h2>
                                <Countdown
                                    date={
                                        Date.now() +
                                        (this.state.data.startDateReleases
                                            .seconds *
                                            1000 -
                                            Date.now())
                                    }
                                    renderer={renderer}
                                />
                            </h2>
                        </div>
                        <div className={styles.links}>
                            <article>
                                <i className="fas fa-user-circle"></i>
                                <p onClick={this.goToArtist}>Go to Artist</p>
                            </article>
                            <article>
                                <a
                                    href={
                                        this.state.data.physicalURLs.merchandise
                                    }
                                >
                                    <i className="fas fa-tshirt"></i>
                                    <p>Merch</p>
                                </a>
                            </article>
                            <article>
                                <a
                                    href={
                                        this.state.data.physicalURLs.musicStore
                                    }
                                >
                                    <i className="fas fa-music"></i>
                                    <p>Music Store</p>
                                </a>
                            </article>
                            <article>
                                <a
                                    href={this.state.data.preSaveURIs.spotify}
                                    target="_blank"
                                >
                                    <i className="fab fa-spotify"></i>
                                    <p>Pre-save</p>
                                </a>
                            </article>
                        </div>
                        <div>
                            <p>{this.state.data.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
