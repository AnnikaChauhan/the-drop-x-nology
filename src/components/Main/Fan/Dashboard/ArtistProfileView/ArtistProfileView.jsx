import React, { Component } from "react";
import styles from "./ArtistProfileView.module.scss";
import SmallButton from "../../../../Utility/Buttons/SmallButton";
import ReleaseCardList from "../../../../../components/Main/Fan/Dashboard/ReleaseCardList";
import { firestore } from "../../../../../firebase";

export default class ArtistProfileView extends Component {
    state = {
        data: null,
        artist: {},
        releases: []
    }
           
    componentDidMount() {
        const id = window.location.pathname.substring(
            window.location.pathname.lastIndexOf("/") + 1
        );

        firestore
            .collection("Releases")
            .where("uid", "==", id)
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
            .where("uid", "==", id)
            .get()
            .then(query => {
                const artist = query.docs[0].data();
                this.setState({ artist });
            });
    }
    
    render() {
        return (
            <section className={styles.mainWrapper}>
                <img className={styles.profileImage} src={this.state.artist.artistProfileImage} alt="Artist Profile" />
                <h2>{this.state.artist.artistName}</h2>
                <SmallButton text={"Follow"} />
                <h3 className={styles.lineThrough}>Upcoming Releases</h3>
                <ReleaseCardList releases={this.state.releases} />
                <h3 className={styles.lineThrough}>Past Releases</h3>
                <h3 className={styles.lineThrough}>Biography</h3>
                <p>{this.state.artist.bio}</p>
            </section>

        )
    }
} 


