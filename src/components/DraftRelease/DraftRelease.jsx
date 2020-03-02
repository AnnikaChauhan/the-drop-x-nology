import React, { Component } from "react";
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
                    <div>
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
                <div>
                    <h4>Announcement</h4>
                    <div>
                        <input type="text" id="day1" placeholder="D"/>
                        <input type="text" id="day2" placeholder="D"/>
                        <input type="text" id="day3" placeholder="M"/>
                        <input type="text" id="day4" placeholder="M"/>
                        <input type="text" id="day5" placeholder="Y"/>
                        <input type="text" id="day6" placeholder="Y"/>
                        <input type="text" id="day7" placeholder="Y"/>
                        <input type="text" id="day8" placeholder="Y"/>
                        <input type="text" id="day9" placeholder="0"/>
                        <input type="text" id="day10" placeholder="0"/>
                        <input type="text" id="day11" placeholder="0"/>
                    </div>
                </div>
            </section>
                    )
                }
            }
            
export default DraftRelease;