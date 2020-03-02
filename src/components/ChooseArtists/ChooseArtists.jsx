import React, { Component } from "react";
import styles from "./ChooseArtists.module.scss";
import comet from "../../static/images/comet.png";

class ChooseArtists extends Component {
    render() {
        return (
            <section className={styles.ChooseArtists}>
                <img className={styles.comet} src={comet} alt="The Drop Logo" />
                <h2>We found these artists in your music library!</h2>
                <button className={styles.followAll}>FOLLOW ALL</button>
                <div className={styles.Artist}>
                    <div>Artist 1</div>
                    <button>FOLLOW</button>
                </div>
                <div className={`${styles.Artist} ${styles.RemoveBorder}`}>
                    <div>Artist 2</div>
                    <button>FOLLOW</button>
                </div>
                <div className={styles.Artist}>
                    <div>Artist 3</div>
                    <button>FOLLOW</button>
                </div>
            </section>
        );
    }
}
export default ChooseArtists;
