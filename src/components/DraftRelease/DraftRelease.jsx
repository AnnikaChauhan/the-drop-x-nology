import React, { Component } from "react";
import styles from "./DraftRelease.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import ReleaseDetails from "./ReleaseDetails/ReleaseDetails";
import PreSaveURIs from "./PreSaveURIs/PreSaveURIs";
import PhysicalURLs from "./PhysicalURLs/PhysicalURLs";
import ArtworkMedia from "./ArtworkMedia/ArtworkMedia";

class DraftRelease extends Component {
    render() {
        return (
            <section>
                <article className={styles.topPart}>
                    <h2>Manage Release</h2>
                    <div>
                        <button>SAVE</button>
                        <button>PREVIEW</button>
                        <button>PUBLISH</button>
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

                    )
                }
            }
            
export default DraftRelease;