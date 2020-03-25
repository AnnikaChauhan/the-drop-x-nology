import React, { Component } from "react";
import styles from "./SearchCard.module.scss";
import SmallButton from "../../../../../Utility/Buttons/SmallButton";
import { firestore } from "../../../../../../firebase";

export default class SearchCard extends Component {
    state = {
        success: false
    }

    handleChange = () => {
        let array = Object.values(this.props.userinfo.followedArtists)
        if (!array.includes(this.props.artist.uid)) {
            firestore
                .collection("Fans")
                .doc(this.props.userinfo.docID)
                .update({
                    [`followedArtists.${this.props.artist.uid}`] : this.props.artist.uid
                })
                .then(() => {
                    array.push(this.props.uid)
                    this.setState({
                        success: true
                    })
                    console.log("success")
                })
        }  
    };

    render() {
        let array = Object.values(this.props.userinfo.followedArtists)
        
        if (this.state.success) {
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
                        <SmallButton text={"Followed"}/>
                    </div>
                </article>
            );
        } else {
            console.log(array.includes(this.props.artist.uid))
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
                        {array.includes(this.props.artist.uid) ? <SmallButton text={"Followed"}/> : <SmallButton text={"Follow"} onClick={this.handleChange} />}
                    </div>
                </article>
            );
        }
    }
}
