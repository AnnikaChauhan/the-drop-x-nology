import React, { Component } from "react";
import styles from "./ReleaseCard.module.scss";
import FollowButton from "../../../../../Utility/Buttons/FollowButton/FollowButton";
import { globalHistory } from "@reach/router";

class ReleaseCard extends Component {
    preview = () => {
        globalHistory.navigate(`release/${this.props.release.releaseId}`);
    };

    render() {
        return (
            <article className={styles.Card}>
                <img
                    src={this.props.release.Artwork}
                    alt={`${this.props.release.Artist}'s artwork`}
                    onClick={this.preview}
                />
                <div className={styles.details}>
                    <div className={styles.banner}>
                        <div>
                            <h3>{this.props.release.Artist}</h3>
                            <p>{this.props.release.ReleaseType}</p>
                        </div>
                        <FollowButton />
                    </div>
                    <p className={styles.albumName}>
                        {this.props.release.ReleaseName}
                    </p>
                    <h4>{"12 days"}</h4>
                </div>
            </article>
        );
    }
}

export default ReleaseCard;
