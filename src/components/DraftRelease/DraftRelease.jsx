import React, { Component } from "react";
import ReleaseTimer from "./ReleaseTimer/ReleaseTimer";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./DraftRelease.module.scss";

import Dropdown from 'react-bootstrap/Dropdown';

class DraftRelease extends Component {
    render() {
        return (
            <section>
                <article className={styles.topPart}>
                    <h2>Manage Release</h2>
                    <div>
                        <button>SAVE</button>
                        <button>PREVIEW</button>
                        <button>PUBLISH</button>
                    </div>
                </article>
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
                        <input type="text"/>
                        <h4>Description</h4>
                        <input type="text"/>
                    </form>
                </article>
                <h4>Announcement</h4>
                <ReleaseTimer />
                <form className={styles.wysiwyg}>
                    <input type="text" placeholder="extra info to be added here by artist if required (WYSIWYG)"/>
                </form>
                <h4>Release</h4>
                <ReleaseTimer />
                <hr/>
                <h3>Pre-save URI's</h3>
                <div className={styles.URI}>
                    <h4>Spotify</h4>
                    <form action=""><input type="url" /></form>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </section>
                    )
                }
            }
            
export default DraftRelease;