import React, { Component } from "react";
import styles from "./DraftRelease.module.scss";
import ReleaseDetails from "./ReleaseDetails/ReleaseDetails";
import PreSaveURIs from "./PreSaveURIs/PreSaveURIs";
import PhysicalURLs from "./PhysicalURLs/PhysicalURLs";
import ArtworkMedia from "./ArtworkMedia/ArtworkMedia";
import SmallButton from "../../../Utility/Buttons/SmallButton";
import Header from "../../../Utility/Header";
import { Link } from "@reach/router";
import SimpleReactValidator from 'simple-react-validator';

class DraftRelease extends Component {
  

    handleSaveClick = () => {
        console.log("clicked")
    }

    render() {
        return (
            <section className={styles.DraftRelease}>
                <article className={styles.topPart}>
                    <Header title={"Edit Release"} />
                    <div className={styles.links}>
                        <SmallButton onClick={this.handleSaveClick} text="SAVE" />
                        <Link to="/artist/preview">
                            <SmallButton text="PREVIEW" />
                        </Link>
                        <SmallButton text="PUBLISH" />
                    </div>
                </article>
                {/* progress bar */}
                {/* add asterisk to boxes which are required to create a release */}
                <ReleaseDetails />
                {/* <PreSaveURIs 
                // preSaveUrl={this.state.preSaveUrl} setPreSaveUrl={this.setPreSaveUrl} 
                />
                <PhysicalURLs />
                <ArtworkMedia /> */} */}
               
                {/* Add continue buttons to each component */}
                {/* Add a back to top button, put the save etc buttons back */}
            </section>
        );
    }
}

export default DraftRelease;

// pre save url, physical url, artwork media, all in release details
//