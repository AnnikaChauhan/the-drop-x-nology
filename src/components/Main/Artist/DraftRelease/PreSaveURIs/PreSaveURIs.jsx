import React, { Component } from "react";
import styles from "./PreSaveURIs.module.scss";

export default class PreSaveURLs extends Component {
    render() {
        return (
            <div className={styles.URIs}>
                <h3>Pre-save URI's</h3>
                <div>
                    <h4>Spotify</h4>
                    <input type="url" />
                    <h4>Apple Music</h4>
                    <input type="url" />
                    <h4>Soundcloud</h4>
                    <input type="url" />
                    <h4>Tidal</h4>
                    <input type="url" />
                </div>
                <hr />
            </div>
        );
    }
}
