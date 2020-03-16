import React, { Component } from "react";
import styles from "./ReleaseCard.module.scss";
import FollowButton from "../../../../../Utility/Buttons/FollowButton/FollowButton";
import { globalHistory } from "@reach/router";

class ReleaseCard extends Component {
    preview = () => {
        globalHistory.navigate(`release/${this.props.Releases.releaseId}`);
    };

    render() {
        return (
            <article className={styles.Card} onClick={this.preview}>
                <img
                    src={this.props.Releases.Artwork}
                    alt={`${this.props.Releases.Artist}'s artwork`}
                />
                <div className={styles.details}>
                    <div className={styles.banner}>
                        <div>
                            <h3>{this.props.Releases.Artist}</h3>
                            <p>{this.props.Releases.ReleaseType}</p>
                        </div>
                        <FollowButton />
                    </div>
                    <p className={styles.albumName}>
                        {this.props.Releases.ReleaseName}
                    </p>
                    <h4>{"12 days"}</h4>
                </div>
            </article>
        );
    }
}

export default ReleaseCard;
