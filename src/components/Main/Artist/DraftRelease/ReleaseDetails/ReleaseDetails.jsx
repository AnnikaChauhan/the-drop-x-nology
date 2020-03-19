import React, { Component } from "react";
import styles from "./ReleaseDetails.module.scss";
import ReleaseTimer from "./ReleaseTimer";
import "bootstrap/dist/css/bootstrap.min.css";
import WYSIWYG from "../../../../Utility/WYSIWYG/WYSIWYG";
import DropdownSelection from "./Dropdown/Dropdown";
import PhysicalURLs from "../PhysicalURLs/PhysicalURLs";
import ArtworkMedia from "../ArtworkMedia/ArtworkMedia";
import PreSaveURIs from "../PreSaveURIs/PreSaveURIs";

// import SimpleReactValidator from 'simple-react-validator';

export default class ReleaseDetails extends Component {

    state = {
        formData:{
            title: "",
            description:"",
            releaseType: "",
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
            // physicalURLs: {},
            // preSaveURIs: {}
        }
        // physicalURLs: ["musicStore", "merchandise"],
        // preSaveURIs: ["spotify", "appleMusic", "soundcloud", "tidal"]

        // ,
        // physicalURLs: ["musicStore", "merchandise"]
    }
    
    handleInput = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
                // physicalURLs: {
                //     ...this.state.formData.physicalURLs,
                // },
                // preSaveURIs: {
                //     ...this.state.formData.preSaveURIs,
                //     [event.target.name]: event.target.value
                // }
                
            }
        })
        // console.log(this.state.formData);
        // console.log(this.state.formData.physicalURLs);
        
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
        // console.log(this.state.formData.physicalURLs);
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
        // console.log(this.state.formData.preSaveURIs);
    }
    
    

    render() {
        console.log(this.state.formData.physicalURLs);
        console.log(this.state.formData.preSaveURIs);
        return (
            <>
                <article className={styles.initialDescription}>
                    <h3>Type</h3>
                    <div className={styles.Dropdown}>
                        <DropdownSelection handleInput={this.handleInput} />
                    </div>
                    <form className="myForm">
                        <h3>Title *</h3>
                        <input type="text" name="title" required value={this.state.formData.title}  onChange={this.handleInput}/>
                        <h3>Description *</h3>
                        <textarea rows="8" name="description" required value={this.state.formData.description} onChange={this.handleInput}/>
                    </form>
                </article>
                <h3>Announcement</h3>
                <ReleaseTimer />
                <WYSIWYG />
                <h3>Release</h3>
                <ReleaseTimer />
                <hr />
                <PhysicalURLs formData={this.state.formData.physicalURLs} handleInput={this.handleInputPhysicalURLs} />
                <PreSaveURIs formData={this.state.formData.preSaveURIs} handleInput={this.handleInputPresaveURIs} />
                <ArtworkMedia handleInput={this.handleInput} />
            </>
        );
    }
}