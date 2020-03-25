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
        console.log(id)

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


// artist:
// artistName: "Rossko"
// artistProfileImage: "https://firebasestorage.googleapis.com/v0/b/the-drop-x-nology.appspot.com/o/Rossko.jpg?alt=media&token=8bf8b256-dcf3-41c5-ab88-054efd13a1f2"
// bio: "One of the few artists that has made his name through his DJing alone, armed with a relentless library of cutting-edge House & Techno and the knack of unearthing forgotten gems of the past. A rarity nowadays."
// type: "artist"
// uid: "eTdDTRQP7FIFFTVqTmEMtCrATIAP"


// artworkURL: "https://firebasestorage.googleapis.com/v0/b/the-drop-x-nology.appspot.com/o/artwork%2Fd1d50150-3e8d-41f7-bf74-6abdd7abdfbf.jpg?alt=media&token=c095bb11-1f3a-4dd3-baa1-d828f92198b7"
// description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia in aliquam assumenda ullam itaque numquam ducimus tempore laboriosam? Veritatis inventore optio asperiores architecto vero! Rem consequatur tenetur numquam iste?"
// physicalURLs: {merchandise: "", musicStore: ""}
// preSaveURIs: {appleMusic: "", soundcloud: "", spotify: "https://open.spotify.com/album/2M3Va8W8jvjtv7BoEctcot", tidal: ""}
// releaseType: "EP"
// startDate: t {seconds: 1585079459, nanoseconds: 755000000}
// startDateReleases: t {seconds: 1585161900, nanoseconds: 0}
// status: "Live"
// title: "Moscow"
// uid: "eTdDTRQP7FIFFTVqTmEMtCrATIAP"
// releaseId: "VNQSyCRXAmu0rVSXVj11"