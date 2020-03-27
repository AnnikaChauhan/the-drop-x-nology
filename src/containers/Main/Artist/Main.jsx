import React, { Component } from "react";
import styles from "./Main.module.scss";
import ArtistRoutes from "../../../Routes/ArtistRoutes";
import Navbar from "../../../components/Navbar";

export default class Main extends Component {
    render() {
        return (
            <div className={styles.Main}>
                <Navbar signOut={this.props.signOut}/>
                <ArtistRoutes user={this.props.user}/>
            </div>
        );
    }
}