import React, { Component } from "react";
import styles from "./ReleaseDetails.module.scss";
import ReleaseTimer from "./ReleaseTimer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";


export default class ReleaseDetails extends Component {
    render() {
        return (
            <>
                <article className={styles.initialDescription}>
                    <h4>Type</h4>
                    <div className={styles.Dropdown}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                select type from below list...
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Single</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">EP</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Album</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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
                <form className={styles.wysiwyg}>
                    <input type="text" placeholder="extra info to be added here by artist if required (WYSIWYG)" />
                </form>
                <h4>Release</h4>
                <ReleaseTimer />
                <hr/>
            </>
        );
    }
}