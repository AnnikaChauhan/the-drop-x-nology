import React, { Component } from "react";
import styles from "./PreSaveURIs.module.scss";

export default class PreSaveURLs extends Component {
    render() {
        return (
            <div className={styles.URIs}>
                <h3>Pre-save URI's</h3>
                <div>
                    <h4>Spotify</h4>
                    <input type="url"
                        name="spotify"
                        value={this.props.formData.spotify}
                        onChange={this.props.handleInput}
                    />
                    <h4>Apple Music</h4>
                    <input
                        type="url"
                        name="appleMusic"
                        value={this.props.formData.appleMusic}
                        onChange={this.props.handleInput}
                    />
                    <h4>Soundcloud</h4>
                    <input
                        type="url"
                        name="soundcloud"
                        value={this.props.formData.soundcloud}
                        onChange={this.props.handleInput}
                    />
                    <h4>Tidal</h4>
                    <input
                        type="url"
                        name="tidal"
                        value={this.props.formData.tidal}
                        onChange={this.props.handleInput}
                    />

                </div>
                <hr />
            </div>
        );
    }
}
