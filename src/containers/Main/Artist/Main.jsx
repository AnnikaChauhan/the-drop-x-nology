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
<<<<<<< HEAD


=======
>>>>>>> 5558e87b2ef0c48cc18610ab076ee39cb8e04148
