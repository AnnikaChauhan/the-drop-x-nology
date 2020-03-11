import React, { Component } from "react";
import styles from "./ReleaseDetails.module.scss";
import AnnouncementTimer from "./AnnouncementTimer";
import ReleaseTimer from "./ReleaseTimer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import WYSIWYG from "../../../../Utility/WYSIWYG/WYSIWYG";
import DropdownSelection from "./Dropdown/Dropdown";


export default class ReleaseDetails extends Component {
    render() {
        return (
            <>
                <article className={styles.initialDescription}>
                    <h4>Type</h4>
                    <div className={styles.Dropdown}>
                        <DropdownSelection />
                    </div>
                    <form>
                        <h4>Title</h4>
                        <input type="text" />
                        <h4>Description</h4>
                        <input type="text" />
                    </form>

                </article>
                <h4>Announcement</h4>
                <ReleaseTimer />
                <WYSIWYG />
                <h4>Release</h4>
                <ReleaseTimer />
                <hr/>
            </>
        );
    }
}