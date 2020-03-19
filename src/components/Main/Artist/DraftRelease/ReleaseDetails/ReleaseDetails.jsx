import React, { Component } from "react";
import styles from "./ReleaseDetails.module.scss";
import ReleaseTimer from "./ReleaseTimer";
import "bootstrap/dist/css/bootstrap.min.css";
import WYSIWYG from "../../../../Utility/WYSIWYG/WYSIWYG";
import DropdownSelection from "./Dropdown/Dropdown";
import PhysicalURLs from "../PhysicalURLs/PhysicalURLs";
import ArtworkMedia from "../ArtworkMedia/ArtworkMedia";
import PreSaveURIs from "../PreSaveURIs/PreSaveURIs";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

// import SimpleReactValidator from 'simple-react-validator';

export default class ReleaseDetails extends Component {

    state = {
        formData: {
            title: "",
            description: "",
            releaseType: "",
            startDate: new Date(),
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
            // releaseTimer: {
            //     startDate: new Date()
            // }
        }
    }

    handleChange = date => {
        // this.setState({
        //   formData: {
        //       releaseTimer: {
        //         startDate: date
        //       }
        //   }  
        // });
        console.log(date)
        this.setState({
            formData: {
                ...this.state.formData,
                startDate: date
            }
        });
    };


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
        // console.log(this.state.formData.physicalURLs);
        // console.log(this.state.formData.preSaveURIs);
        // console.log(this.state.startDate);
        // console.log(this.state.formData.releaseTimer.startDate)
        let handleColor = time => {
            return "text-success";
        };       
        return (
            <>
                <article className={styles.initialDescription}>
                    <h3>Type</h3>
                    <div className={styles.Dropdown}>
                        <DropdownSelection handleInput={this.handleInput} />
                    </div>
                    <form className="myForm">
                        <h3>Title *</h3>
                        <input type="text" name="title" required value={this.state.formData.title} onChange={this.handleInput} />
                        <h3>Description *</h3>
                        <textarea rows="8" name="description" required value={this.state.formData.description} onChange={this.handleInput} />
                    </form>
                </article>
                <h3>Announcement Date</h3>
                {/* <ReleaseTimer /> */}
                <div>
                    <WYSIWYG />
                </div>
                <DatePicker
                    // onSelect={this.handleSelect}
                    selected={this.state.formData.startDate}
                    onChange={this.handleChange}
                    timeClassName={handleColor}
                    showTimeSelect
                    timeInputLabel="Time:"
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"

                />
                
                {/* <WYSIWYG /> */}
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