import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownSelection from "./Dropdown/Dropdown";
import PhysicalURLs from "../PhysicalURLs/PhysicalURLs";
import PreSaveURIs from "../PreSaveURIs/PreSaveURIs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./ReleaseDetails.module.scss";
import "./datecss.css";

export default class ReleaseDetails extends Component {
  render() {
    let handleColor = () => {
      return "text-success";
    };
    return (
      <>
        <article className={styles.initialDescription}>
          <h3>Type</h3>
          <div className={styles.Dropdown}>
            <DropdownSelection handleInput={this.props.handleInput} />
          </div>
          <form className="myForm">
            <h3>Title *</h3>
            {this.props.errorTitle && <p>{"This section is required"}</p>}
            <input
              type="text"
              name="title"
              required
              value={this.props.formData.title}
              onChange={this.props.handleInput}
            />
            <h3>Description *</h3>
            {this.props.errorDesc && <p>{"This section is required"}</p>}
            <textarea
              rows="8"
              name="description"
              required
              value={this.props.formData.description}
              onChange={this.props.handleInput}
            />
          </form>
        </article>

        <h3>Release Date *</h3>
        {this.props.errorTime && (
          <p>{"The date must be greater than the current date"}</p>
        )}
        <DatePicker
          selected={this.props.formData.startDateReleases}
          onChange={this.props.handleChangeReleases}
          timeClassName={handleColor}
          showTimeSelect
          timeInputLabel="Time:"
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />

        <article className={styles.initialDescription}>
          <h3>Announcement Details</h3>
          {this.props.errorBio && <p>{"This section is required"}</p>}
          <textarea
            rows="8"
            name="announcementDetails"
            required
            value={this.props.formData.announcementDetails}
            onChange={this.props.handleInput}
          />
        </article>

        <h3>Announcement Date</h3>
        <div className={styles.datepickerclass}>
          <DatePicker
            selected={this.props.formData.startDate}
            onChange={this.props.handleChange}
            timeClassName={handleColor}
            showTimeSelect
            timeInputLabel="Time:"
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>

        <hr />
        <PhysicalURLs
          formData={this.props.formData.physicalURLs}
          handleInput={this.props.handleInputPhysicalURLs}
        />
        <PreSaveURIs
          formData={this.props.formData.preSaveURIs}
          handleInput={this.props.handleInputPresaveURIs}
        />
      </>
    );
  }
}
