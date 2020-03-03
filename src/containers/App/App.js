import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import LandingPage from "../LandingPage";
import Navbar from "../../components/Navbar";
import Main from "../Main";
import ChooseArtists from "../../components/ChooseArtists";
import ArtistProfile from "../../components/Main/ArtistProfile";

function App() {
    return (
        <div className={styles.App}>
            {/* <ChooseArtists /> */}
            <ArtistProfile />
        </div>
    );
}

export default App;
