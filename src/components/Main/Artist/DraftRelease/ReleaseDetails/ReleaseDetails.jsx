import React, { Component } from "react";
import styles from "./ReleaseDetails.module.scss";
import ReleaseTimer from "./ReleaseTimer";
import "bootstrap/dist/css/bootstrap.min.css";
import WYSIWYG from "../../../../Utility/WYSIWYG/WYSIWYG";
import DropdownSelection from "./Dropdown/Dropdown";

export default class ReleaseDetails extends Component {
    render() {
        return (
            <>
                <article className={styles.initialDescription}>
                    <h3>Type</h3>
                    <div className={styles.Dropdown}>
                        <DropdownSelection />
                    </div>
                    <form>
                        <h3>Title</h3>
                        <input type="text" />
                        <h3>Description</h3>
                        <textarea rows="8" />
                    </form>
                </article>
                <h3>Announcement</h3>
                <ReleaseTimer />
                <WYSIWYG />
                <h3>Release</h3>
                <ReleaseTimer />
                <hr />
            </>
        );
    }
}
