import React, { Component } from "react";
import styles from "./DraftRelease.module.scss";
import Dropdown from "react-bootstrap/Dropdown";
import ReleaseDetails from "./ReleaseDetails/ReleaseDetails";
import PreSaveURIs from "./PreSaveURIs/PreSaveURIs";
import PhysicalURLs from "./PhysicalURLs/PhysicalURLs";
import ArtworkMedia from "./ArtworkMedia/ArtworkMedia";
import SmallButton from "../../../Utility/Buttons/SmallButton/SmallButton";
import { Link } from "@reach/router";

class DraftRelease extends Component {
    render() {
        return (
            <section>
                <article className={styles.topPart}>
                    {/* add asterisk to boxes which are required to create a release */}
                    <h2>Manage Release</h2>
                    <div>
                        <SmallButton text="SAVE" />
                        <Link to="/artist/preview">
                            <SmallButton text="PREVIEW" />
                        </Link>
                        <SmallButton text="PUBLISH" />
                    </div>
                    {/* progress bar */}
                </article>
                <ReleaseDetails />
                <PreSaveURIs />
                <PhysicalURLs />
                <ArtworkMedia />
                {/* Add continue buttons to each component */}
                {/* Add a back to top button, put the save etc buttons back */}
            </section>
        );
    }
}

export default DraftRelease;
