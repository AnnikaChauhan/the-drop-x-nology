import React, { Component } from "react";
import styles from "./ChooseArtists.module.scss";
class ChooseArtists extends Component {
    render() {
        return (
          <section className={styles.ChooseArtists}>
              <div>LOGO</div>
              <h2>We found these artists in your music library!</h2>
              <button className={styles.followAll}>FOLLOW ALL</button>
                <div className={styles.Artist}>
                    <div>Artist 1</div>
                    <button className={styles.follow}>FOLLOW</button>
                </div>
                <div className={styles.Artist}>
                    <div>Artist 2</div>
                    <button className={styles.follow}>FOLLOW</button>
                </div>
                <div className={styles.Artist}>
                    <div>Artist 3</div>
                    <button className={styles.follow}>FOLLOW</button>
                </div>
            </section>
        )
    }
}
export default ChooseArtists;
