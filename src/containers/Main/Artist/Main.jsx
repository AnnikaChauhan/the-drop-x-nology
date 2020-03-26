import React, { Component } from "react";
import styles from "./Main.module.scss";
import ArtistRoutes from "../../../Routes/ArtistRoutes";
import Navbar from "../../../components/Navbar";

export default class Main extends Component {
    render() {
        return (
            <div className={styles.Main}>
                <Navbar />
                <ArtistRoutes user={this.props.user}/>
            </div>
        );
    }
}