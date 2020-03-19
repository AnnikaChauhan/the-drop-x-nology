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
    
    state = {
        formData: {
            title: "",
            description: "",
            releaseType: "",
            startDate: new Date(),
            startDateReleases: new Date(),
            physicalURLs: {
                musicStore: "",
                merchandise: ""
            },
            preSaveURIs: {
                spotify: "",
                appleMusic: "",
                soundcloud: "",
                tidal: ""
            }
        }
    }

    handleChange = date => {
        console.log(date)
        this.setState({
            formData: {
                ...this.state.formData,
                startDate: date
            }
        });
    };

    handleChangeReleases = date => {
        console.log(date)
        this.setState({
            formData: {
                ...this.state.formData,
                startDateReleases: date
            }
        });
    };

    handleInput = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }
        })
    };

    handleInputPhysicalURLs = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                physicalURLs: {
                    ...this.state.formData.physicalURLs,
                    [event.target.name]: event.target.value
                }
            }
        })
    }

    handleInputPresaveURIs = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                preSaveURIs: {
                    ...this.state.formData.preSaveURIs,
                    [event.target.name]: event.target.value
                }
            }
        })
    }

    handleSaveClick = () => {
        console.log("clicked")
    }

    render() {
        console.log(this.state.formData)
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
                <ReleaseDetails formData={this.state.formData} handleChange={this.handleChange} handleChangeReleases={this.handleChangeReleases} handleInput={this.handleInput} handleInputPhysicalURLs={this.handleInputPhysicalURLs} handleInputPresaveURIs={this.handleInputPresaveURIs}    />
                {/* <PreSaveURIs 
                // preSaveUrl={this.state.preSaveUrl} setPreSaveUrl={this.setPreSaveUrl} 
                />
                <PhysicalURLs />
                <ArtworkMedia /> */}
               
                {/* Add continue buttons to each component */}
                {/* Add a back to top button, put the save etc buttons back */}
            </section>
        );
    }
}

export default DraftRelease;

// pre save url, physical url, artwork media, all in release details
//