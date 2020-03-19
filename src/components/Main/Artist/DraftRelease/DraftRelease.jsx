import React, { Component } from "react";

import firebase from '../../../../firebase';
import FileUploader from "react-firebase-file-uploader";
import ReleaseDetails from "./ReleaseDetails/ReleaseDetails";
import PreSaveURIs from "./PreSaveURIs/PreSaveURIs";
import PhysicalURLs from "./PhysicalURLs/PhysicalURLs";
// import ArtworkMedia from "./ArtworkMedia/ArtworkMedia";
import SmallButton from "../../../Utility/Buttons/SmallButton";
import Header from "../../../Utility/Header";
import { Link } from "@reach/router";
import DatePicker from "react-datepicker";
import { firestore } from "../../../../firebase";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DraftRelease.module.scss";
import './datepicker.css'


class DraftRelease extends Component {
    
    state = {
        formData: {
            uid: this.props.user.uid,
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
        },
        artwork: {
            artwork: "",
            isUploading: false,
            progress: 0,
            artworkURL: ""
        }
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = (progress) => this.setState({ progress });

    handleUploadError = (error) => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleChange = date => {
        this.setState({
          startDate: date
        });
    };

    handleUploadSuccess = (filename) => {
        this.setState({ artwork: filename, progress: 100, isUploading: false });
        firebase
          .storage()
          .ref("artwork")
          .child(filename)
          .getDownloadURL()
          .then(url => this.setState({ artworkURL: url }));
    };
    

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

    submitFormData = (event) => {
        event.preventDefault();
        firestore
                .collection("Releases")
                .add(this.state.formData)
                .then(() => {
                    console.log("it works");
                })
    }
    

    render() {
        console.log(this.state.formData)
        return (
            <section className={styles.DraftRelease}>
                <article className={styles.topPart}>
                    <Header title={"Edit Release"} />
                    <div className={styles.links}>
                        <SmallButton text="SAVE" />
                        <Link to="/release">
                            <SmallButton text="PREVIEW" />
                        </Link>
                        <SmallButton text="PUBLISH" onClick={this.submitFormData} />
                    </div>
                </article>
                {/* progress bar */}
                {/* add asterisk to boxes which are required to create a release */}
                {/* <ArtworkMedia /> */}
                
                <ReleaseDetails formData={this.state.formData} handleChange={this.handleChange} handleChangeReleases={this.handleChangeReleases} handleInput={this.handleInput} handleInputPhysicalURLs={this.handleInputPhysicalURLs} handleInputPresaveURIs={this.handleInputPresaveURIs}    />
               
                <h3>Artwork</h3>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {this.state.artworkURL && (<img alt="artwork" src={this.state.artworkURL}/>)}
                <FileUploader
                    accept="image/*"
                    name="artwork"
                    randomizeFilename
                    storageRef={firebase.storage().ref("artwork")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                    maxHeight={500}
                    maxWidth={500}
                />
                {/* Add continue buttons to each component */}
                {/* Add a back to top button, put the save etc buttons back */}
            </section>
        );
    }
}

export default DraftRelease;
