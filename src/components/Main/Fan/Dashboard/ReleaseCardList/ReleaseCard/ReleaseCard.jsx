import React, { Component } from "react";
import styles from "./ReleaseCard.module.scss";
import FollowButton from "../../../../../Utility/Buttons/FollowButton/FollowButton";
import { globalHistory } from "@reach/router";
import Countdown from 'react-countdown';


class ReleaseCard extends Component {
    state = {
        startDateReleases: "Wed Apr 15 2020 15:30:45 GMT+0100 (British Summer Time)"
    }

    preview = () => {
        globalHistory.navigate(`release/${this.props.release.releaseId}`);
    };

    

    render() {
        const renderer = ({ days, hours, minutes, seconds }) => {
              return <span>{days}d {hours}h {minutes}min and {seconds}s</span>;
        };
          
        console.log(this.props.release.startDateReleases)
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
                    <h4><Countdown date={Date.now() + ((this.props.release.startDateReleases.seconds * 1000) - Date.now())} renderer={renderer} /></h4>
                </div>
            </article>
        );
    }
}

export default ReleaseCard;
