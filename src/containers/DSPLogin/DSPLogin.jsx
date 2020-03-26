import React, { Component } from "react";
import styles from "./DSPLogin.module.scss";
import LargeButton from "../../components/Utility/Buttons/LargeButton";
import ChooseArtists from '../../components/ChooseArtists';
import logo from "../../static/images/logo-white.png";

import { spotify } from "../../static/config";

import { SpotifyApiContext } from 'react-spotify-api';
import { UserArtists } from 'react-spotify-api';

export default class DSPLogin extends Component {
    state = {
        hashParams: {},
        token: ""
    }

    // This function turns a query string into an object of those query parameters
    setHashParams() {
        let hashParams = {};
        const regex = /([^&;=]+)=?([^&;]*)/g;
        const queryString = window.location.hash.substring(1);

        let equation;
        while (equation = regex.exec(queryString)) {
            hashParams[equation[1]] = decodeURIComponent(equation[2]);
        }
        this.setState({ hashParams, token: hashParams.access_token })
    }

    componentDidMount() {
        this.setHashParams();
    }

    connectToSpotify() {
        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(spotify.client_id);
        url += '&scope=' + encodeURIComponent(spotify.scope);
        url += '&redirect_uri=' + encodeURIComponent(spotify.redirect_uri);

        window.location = url;
    }

    get chooseArtists() {
        if (this.state.token) {
            return (
                <SpotifyApiContext.Provider value={this.state.token}>
                    <ChooseArtists />
                </SpotifyApiContext.Provider>
            )
        } else {
            return (
                <div className={styles.connect}>
                    <h2>Sign up successful!</h2>
                    <p>Connect your account to Spotify to find artists you love on The Drop.</p>
                    <div className={styles.buttonsWrapper}>
                        <LargeButton
                            handleClick={this.connectToSpotify}
                            text={"CONNECT TO SPOTIFY"}
                        />
                    </div>
                </div>
            )
        }

    }

    render() {
        return (
            <section className={styles.DSPLogin}>
                <div className={styles.logo}>
                    <img
                        src={logo}
                        alt="The Drop"
                    />
                </div>
                <div className={styles.artistList}>
                    {this.chooseArtists}
                </div>
            </section>
        );
    }
}
