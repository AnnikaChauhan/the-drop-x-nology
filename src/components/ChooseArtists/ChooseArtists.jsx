import React, { Component } from "react";
import styles from "./ChooseArtists.module.scss";
import LargeButton from "../Utility/Buttons/LargeButton";
import FollowButton from '../Utility/Buttons/FollowButton';

class ChooseArtists extends Component {
    render() {
        return (
            <section className={styles.ChooseArtists}>
                <h2>We found these artists in your music library!</h2>
                <LargeButton className={styles.followAll} text = {"Follow ALL"}/>
                <div className={styles.artist}>
                    <div>Artist 1</div>
                    <FollowButton />
                </div>
                <div className={styles.artist}>
                    <div>Artist 2</div>
                    <FollowButton />
                </div>
                <div className={styles.artist}>
                    <div>Artist 3</div>
                    <FollowButton />
                </div>
                <LargeButton text={"Continue"} />
            </section>
        );
    }
}

export default ChooseArtists;
