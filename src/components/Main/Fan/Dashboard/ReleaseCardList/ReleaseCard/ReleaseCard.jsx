import React, { Component } from "react";
import styles from "./ReleaseCard.module.scss";
import FollowButton from "../../../../../Utility/Buttons/FollowButton/FollowButton";
import { navigate } from "@reach/router";
import Countdown from "react-countdown";

class ReleaseCard extends Component {
    preview = () => {
        navigate(`/app/fan/release/${this.props.release.releaseId}`, {
            state: this.props.release.uid
        });
    };

    render() {
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            let months = Math.floor(days / 31);
            let newDays = days - 31 * months;
            if (completed) {
                return <span>Released</span>;
            } else if (days > 31) {
                return (
                    <span>
                        {months} Months and {newDays} Days
                    </span>
                );
            } else if (days > 1) {
                return <span>{days} Days</span>;
            } else {
                return (
                    <span>
                        {hours}h {minutes}min and {seconds}s
                    </span>
                );
            }
        };
        return (
            <article className={styles.Card}>
                <img
                    src={this.props.release.artworkURL}
                    alt={`${this.props.release.artistName}'s artwork`}
                    onClick={this.preview}
                />
                <div className={styles.details}>
                    <div className={styles.banner}>
                        <div>
                            <h3>{this.props.release.artistName}</h3>
                            <p>{this.props.release.releaseType}</p>
                        </div>
                        <FollowButton />
                    </div>
                    <p className={styles.albumName}>
                        {this.props.release.title}
                    </p>
                    <h4>
                        <Countdown
                            date={
                                Date.now() +
                                (this.props.release.startDateReleases.seconds *
                                    1000 -
                                    Date.now())
                            }
                            renderer={renderer}
                        />
                    </h4>
                </div>
            </article>
        );
    }
}

export default ReleaseCard;
