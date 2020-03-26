import React, { Component } from "react";
import { navigate } from "@reach/router";  

import styles from "./SearchCard.module.scss";
import SmallButton from "../../../../../Utility/Buttons/SmallButton";

export default class SearchCard extends Component {
    followArtist = () => {
        navigate("/private/fan/artist/" + this.props.artist.uid, {
            state: {
                artist: this.props.artist
            }
        });
    }

    render() {
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
                    <SmallButton text={"Follow"} onClick={this.followArtist} />
                </div>
            </article>
        );
    }
}
