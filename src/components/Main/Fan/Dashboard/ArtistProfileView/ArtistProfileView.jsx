import React, { Component } from "react";
import styles from "./ArtistProfileView.module.scss";
import SmallButton from "../../../../Utility/Buttons/SmallButton";
import ReleaseCardList  from "../../../../../components/Main/Fan/Dashboard/ReleaseCardList";
import { firestore } from "../../../../../firebase";



export default class ArtistProfileView extends Component {
    state = {
        Releases: [],
    };

    componentDidMount() {
        firestore
            .collection("Releases")
            .where("Artist", "==", "Archie Hamilton")
            .get()
            .then(query => {
                const Releases = query.docs.map(doc => doc.data());
                this.setState({
                    Releases: Releases,
                });
            });
    }
    render() {
        return(
            <section className={styles.mainWrapper}> 
             <img className={styles.profileImage} src="https://i.scdn.co/image/07731d62846074c691f9dad6edaf09c271c39fbc" alt="Artist Profile" />
            <h2>Archie Hamilton</h2>
            <SmallButton text={"Follow"} />
            <h3>Upcoming Releases</h3>
            <ReleaseCardList Releases={this.state.Releases} />
                    <h3>Past Releases</h3>
                    <h3>Biography</h3>


            </section>

        )
    }
} 
