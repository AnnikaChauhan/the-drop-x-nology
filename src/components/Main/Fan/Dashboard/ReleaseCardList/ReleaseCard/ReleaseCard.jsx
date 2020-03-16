import React, { Component } from "react";
import styles from "./ReleaseCard.module.scss";
import FollowButton from "../../../../../Utility/Buttons/FollowButton/FollowButton";


class ReleaseCard extends Component {
    render() {
        return (
            <article className={styles.cardWrapper}>
                <img
                    src={this.props.Releases.Artwork}
                    alt={`${this.props.Releases.Artist}'s artwork`}
                />
                <div className={styles.cardBody}>
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
