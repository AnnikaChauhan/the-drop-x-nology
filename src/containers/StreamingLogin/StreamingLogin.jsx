import React, { Component } from "react";
import styles from "./StreamingLogin.module.scss";
import LargeButton from "../../components/Utility/Buttons/LargeButton/LargeButton";
import logo from "../../static/images/logo-white.png"

class StreamingLogin extends Component {
    render() {
        return (
            <section className={styles.mainWrapper}>
                <div className = {styles.imageWrapper}>
                    <img className={styles.dropLogo} src={logo} alt="The Drop" />
                </div>
                <section className={styles.streamWrapper}>
                    <h2>Log in successful</h2>
                    <p>Connect your streaming account</p>
                    <div className={styles.buttonsWrapper}>
                        <LargeButton text={"CONNECT SPOTIFY"} />
                        <LargeButton text={"CONNECT APPLE MUSIC"} />
                        <LargeButton text={"CONNECT DEEZER"} />
                        <LargeButton text={"CONNECT TIDAL"} />
                    </div>
                </section>
            </section>

        )
    }
}

export default StreamingLogin;