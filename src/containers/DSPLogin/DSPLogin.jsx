import React, { Component } from "react";
import styles from "./DSPLogin.module.scss";
import LargeButton from "../../components/Utility/Buttons/LargeButton";
import ChooseArtists from '../../components/ChooseArtists';
import logo from "../../static/images/logo-white.png";
import { SpotifyApiContext } from 'react-spotify-api';

export default class DSPLogin extends Component {
    render() {
        return (
            <section className={styles.DSPLogin}>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.dropLogo}
                        src={logo}
                        alt="The Drop"
                    />
                </div>
                <section className={styles.streamWrapper}>
                    <h2>Sign up successful!</h2>
                    <p>Connect your account to Spotify to find artists you love on The Drop.</p>
                    <div className={styles.buttonsWrapper}>
                        <LargeButton text={"CONNECT TO SPOTIFY"} />
                    </div>
                </section>
                <SpotifyApiContext.Provider value={token}>
                    <ChooseArtists />
                </SpotifyApiContext.Provider>
            </section>
        );
    }
}
