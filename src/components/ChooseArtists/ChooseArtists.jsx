import React, { Component } from "react";
import styles from "./ChooseArtists.module.scss";
import LargeButton from "../Utility/Buttons/LargeButton";
import FollowButton from '../Utility/Buttons/FollowButton';
import { globalHistory } from "@reach/router";
import { UserArtists } from "react-spotify-api";

import { firestore } from "../../firebase";

class ChooseArtists extends Component {
    state = {
        artistsOnFirebase: null
    }

    componentDidMount() {
        firestore
            .collection("Artists")
                //.where("artistName", "==", artist)
                .get()
                .then(query => {
                    const artistsOnFirebase = query.docs.map(doc => doc.data());
                    this.setState({ artistsOnFirebase });
                })
    }

    followAll() {
        const svgs = document.querySelectorAll('svg');
        svgs.forEach(button => button.parentNode.click());
    }

    continue() {
        globalHistory.navigate("private/initial-login");
    }

    render() {
        if (!this.state.artistsOnFirebase) return <h2>No artists were found.</h2>
        return (
            <section className={styles.ChooseArtists}>
                <h2>We found these artists in your Spotify library</h2>
                <p>Click to follow their latest releases</p>
                <LargeButton handleClick={this.followAll} text={"Follow ALL"}/>
                <UserArtists>
                    {(artists, loading, error) => 
                        artists ? (
                            artists.artists.items.sort().map((artist, index) => (
                                this.state.artistsOnFirebase.find(doc => 
                                    doc.artistName === artist.name
                                )   ?   <article key={index} className={styles.artist}>
                                            <p>{artist.name}</p>
                                            <FollowButton /> 
                                        </article>
                                    :   <article key={index} className={`${styles.artist} ${styles.unavailable}`}>
                                            <p>{artist.name}</p>
                                            <span>unavailable</span>
                                        </article>
                            ))
                        ) : null
                    }
                </UserArtists>
                <LargeButton 
                    handleClick={this.continue} 
                    text={"Continue"} 
                />
            </section>
        );
    }
}

export default ChooseArtists;
