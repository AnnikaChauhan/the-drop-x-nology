import React, { Component } from "react";
import styles from "./ArtistProfileView.module.scss";
import SmallButton from "../../../../Utility/Buttons/SmallButton";
import ReleaseCardList from "../../../../../components/Main/Fan/Dashboard/ReleaseCardList";
import { firestore } from "../../../../../firebase";



export default class ArtistProfileView extends Component {
    state = {
        Releases: [
            // Static data to test ReleaseCardList
            {
                "Artist": "John Smith",
                "Artwork": "artwork",
                "ReleaseName": "The doors to Narnia",
                "ReleaseType": "EP",
                "UID": "",
                "startDateReleases": "8 April"
            },
            {
                "Artist": "Louis Valder",
                "Artwork": "artwork",
                "ReleaseName": "From sound to tech",
                "ReleaseType": "EP",
                "UID": "",
                "startDateReleases": "10 june"
            },
            {
                "Artist": "Sonia Bastos",
                "Artwork": "artwork",
                "ReleaseName": "From Lisbon to London",
                "ReleaseType": "EP",
                "UID": "",
                "startDateReleases": "10 October"
            },
            
        ]
    };

    componentDidMount() {
        // if (this.props.location.state.artist) {
        //     const artistId = this.props.location.state.artist.UID;
        //     firestore
        //         .collection("Releases")
        //         .where("UID", "==", artistId)
        //         .get()
        //         .then(query => {
        //             const Releases = query.docs.map(doc => doc.data());
        //             this.setState({
        //                 Releases: Releases,
        //             });
        //         });
        // }
    }
    render() {
        console.log(this.state)
        return (
            <section className={styles.mainWrapper}>
                <img className={styles.profileImage} src="https://i.scdn.co/image/07731d62846074c691f9dad6edaf09c271c39fbc" alt="Artist Profile" />
                <h2>Archie Hamilton</h2>
                <SmallButton text={"Follow"} />
                <h3 className={styles.lineThrough}>Upcoming Releases</h3>
                <ReleaseCardList releases={this.state.Releases} />
                <h3 className={styles.lineThrough}>Past Releases</h3>
                <h3 className={styles.lineThrough}>Biography</h3>
            </section>

        )
    }
} 
