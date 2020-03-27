import React, { Component } from "react";
import styles from "./SearchCard.module.scss";
import SmallButton from "../../../../../Utility/Buttons/SmallButton";
import firebase, { firestore } from "../../../../../../firebase";



export default class SearchCard extends Component {
    state = {
        success: false,
        array : Object.values(this.props.userinfo.followedArtists)
    }

    handleChange = () => {
        if (!this.state.array.includes(this.props.artist.uid)) {
            firestore
                .collection("Fans")
                .doc(this.props.userinfo.docID)
                .update({
                    [`followedArtists.${this.props.artist.uid}`] : this.props.artist.uid
                })
                .then(() => {
                    let joined = this.state.array.concat(this.props.artist.uid)
                    this.setState({
                        success: true,
                        array: joined
                    })
                })
        } else {
            firestore
                .collection("Fans")
                .doc(this.props.userinfo.docID)
                .set({
                    followedArtists : {
                        [this.props.artist.uid] : firebase.firestore.FieldValue.delete()
                    }
                }, { merge : true })
                .then(() => {
                    if (this.state.array.includes(this.props.artist.uid)) {
                        let removed = this.state.array
                        removed.splice(removed.indexOf(this.props.artist.uid), 1)
                        this.setState({
                            success: false,
                            array : removed
                        })
                    } else {
                        this.setState({
                            success: !this.state.success
                        })
                    }
                })
        }
    };

    render() {
        console.log(this.props.artist.artistProfileImage)
        if (this.state.success) {
            return (
                <article className={styles.searchWrapper}>
                    <div className={styles.artistIMG}>
                        <img
                            src={this.props.artist.artistProfileImage}
                            className={styles.image}
                            alt="ArtistImage"
                        />
                    </div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.textarea}>
                            <div className={styles.artistname}>
                                {this.props.artist.artistName}
                            </div>
                            <div className={styles.Bio}>Small Bio</div>
                        </div>
                        <SmallButton text={"Unfollow"} followed={this.state.success} onClick={this.handleChange}/>
                    </div>
                </article>
            );
        } else {
            return (
                <article className={styles.searchWrapper}>
                    <div className={styles.artistIMG}>
                        <img
                            src={this.props.artist.artistProfileImage}
                            className={styles.image}
                            alt="Artist"
                        />
                    </div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.textarea}>
                            <div className={styles.artistname}>
                                {this.props.artist.artistName}
                            </div>
                            <div className={styles.Bio}>Small Bio</div>
                        </div>
                        {this.state.array.includes(this.props.artist.uid) ? <SmallButton text={"Unfollow"} followed={true} onClick={this.handleChange}/> : <SmallButton text={"Follow"} onClick={this.handleChange} />}
                    </div>
                </article>
            );
        }
    }
}
