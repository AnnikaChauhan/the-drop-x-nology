import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";
import ReleaseDetails from "./ReleaseDetails/ReleaseDetails";
import SmallButton from "../../../Utility/Buttons/SmallButton";
import Header from "../../../Utility/Header";
import { Link, navigate } from "@reach/router";
import firebase, { firestore } from "../../../../firebase";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DraftRelease.module.scss";


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
            },
            artworkURL: ""
        },
        artwork: {
            artwork: "",
            isUploading: false,
            progress: 0,
            
        },
        errorTitle: undefined,
        errorDesc: undefined,
        errorTime: undefined
    }

    

    

    handleUploadStart = () => this.setState({ 
        artwork: {
            isUploading: true, progress: 0 
        }
    });

    handleProgress = (progress) => this.setState({
            artwork: {
                progress
            }
        });

    handleUploadError = (error) => {
        this.setState({ 
            artwork: {
                isUploading: false 
            }
        });
        console.error(error);
    };

    handleUploadSuccess = (filename) => {
        this.setState({ 
            artwork: {
                    artwork: filename, 
                    progress: 100, 
                    isUploading: false 
                }
            });
        firebase
          .storage()
          .ref("artwork")
          .child(filename)
          .getDownloadURL()
          .then(url => this.setState({ 
              formData: {
                    ...this.state.formData,
                    artworkURL: url 
              }
            }));
    };
    

    // handleChange = date => {
    //     this.setState({
    //       startDate: date
    //     });
    // };

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

    submitFormData = () => {
        const currentDate = new Date()
        if (this.state.formData.title && this.state.formData.description && this.state.formData.startDateReleases.getTime() > currentDate.getTime()) {
            firestore
                .collection("Releases")
                .add(this.state.formData)
                .then(() => {
                    navigate("/private/artist/home")
                })
        } else {
            this.setState({
                errorTitle: false,
                errorDesc: false,
                errorTime: false
            })
            if (!this.state.formData.title) {
                this.setState({
                    errorTitle: true
                })
            } 
            if (!this.state.formData.description) {
                this.setState({
                    errorDesc: true
                })
            }
            if (this.state.formData.startDateReleases.getTime() < currentDate.getTime()){
                this.setState({
                    errorTime: true
                })
            }
        }
        
    }
    

    render() {
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
                
                <ReleaseDetails errorTitle={this.state.errorTitle} errorDesc={this.state.errorDesc} errorTime={this.state.errorTime} formData={this.state.formData} handleChange={this.handleChange} handleChangeReleases={this.handleChangeReleases} handleInput={this.handleInput} handleInputPhysicalURLs={this.handleInputPhysicalURLs} handleInputPresaveURIs={this.handleInputPresaveURIs}    />
               
                <h3>Artwork</h3>
                {this.state.artwork.isUploading && <p>Progress: {this.state.artwork.progress}</p>}
                {this.state.formData.artworkURL && (<img alt="artwork" src={this.state.formData.artworkURL}/>)}
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
