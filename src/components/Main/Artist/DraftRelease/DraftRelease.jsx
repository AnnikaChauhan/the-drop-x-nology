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
 
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DraftRelease.module.scss";
import './datepicker.css'


class DraftRelease extends Component {
    state = {
        username: "",
        artwork: "",
        isUploading: false,
        progress: 0,
        artworkURL: "",
        startDate: new Date()
    };

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
    


    render() {
        console.log(this.state.artworkURL)
        return (
            <section className={styles.DraftRelease}>
                <article className={styles.topPart}>
                    <Header title={"Edit Release"} />
                    <div className={styles.links}>
                        <SmallButton text="SAVE" />
                        <Link to="/artist/preview">
                            <SmallButton text="PREVIEW" />
                        </Link>
                        <SmallButton text="PUBLISH" />
                    </div>
                </article>
                {/* progress bar */}
                {/* add asterisk to boxes which are required to create a release */}
                <ReleaseDetails />
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    popperClassName="yomama"
                />
                <PreSaveURIs />
                <PhysicalURLs />
                {/* <ArtworkMedia /> */}
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
