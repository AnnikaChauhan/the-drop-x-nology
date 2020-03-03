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
                <ReleaseTimer />
            </section>
                    )
                }
            }
            
export default DraftRelease;