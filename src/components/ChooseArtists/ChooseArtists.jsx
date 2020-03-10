import React, { Component } from "react";
import styles from "./ChooseArtists.module.scss";
import comet from "../../static/images/comet.png";
import LargeButton from "../Utility/Buttons/LargeButton/LargeButton";
import SmallButton from "../Utility/Buttons/SmallButton/SmallButton";
import TickButton from "../Utility/Buttons/TickButton/TickButton";

class ChooseArtists extends Component {
    render() {
        return (
            <section className={styles.ChooseArtists}>
                <img className={styles.comet} src={comet} alt="The Drop Logo" />
                <h2>We found these artists in your music library!</h2>
                <div className={styles.wrapperLargeButton}>
                    <LargeButton className={styles.followAll} text = {"Follow ALL"}/>
                </div>
                <div className={styles.Artist}>
                    <div>Artist 1</div>
                    <SmallButton text={"Follow"} />
                </div>
                <div className={`${styles.Artist} ${styles.RemoveBorder}`}>
                    <div>Artist 2</div>
                    <SmallButton text={"Follow"} />
                </div>
                <div className={styles.Artist}>
                    <div>Artist 3</div>
                    <TickButton />
                </div>
                <div className= {styles.wrapperLargeButton}>
                    <LargeButton text = {"Sign Up"} />
                </div>
                
            </section>
        );
    }
}
export default ChooseArtists;
