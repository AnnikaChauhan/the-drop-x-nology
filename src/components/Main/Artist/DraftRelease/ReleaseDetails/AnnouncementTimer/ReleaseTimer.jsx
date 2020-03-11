import React, { Component } from "react";
import styles from "./ReleaseTimer.module.scss";
import ToggleButtonA from "./ToggleA";

class ReleaseTimer extends Component {
    render() {
        return (
            <div className={styles.announcementDate}>
                <div>
                    <input type="text" id="day1" placeholder="D" />
                    <input type="text" id="day2" placeholder="D" />
                    <input type="text" id="day3" placeholder="M" />
                    <input type="text" id="day4" placeholder="M" />
                    <input type="text" id="day5" placeholder="Y" />
                    <input type="text" id="day6" placeholder="Y" />
                    <input type="text" id="day7" placeholder="Y" />
                    <input type="text" id="day8" placeholder="Y" />
                    <input type="text" id="day9" placeholder="0" />
                    <input type="text" id="day10" placeholder="0" />
                    <input type="text" id="day11" placeholder="0" />
                </div>
                <p>AM</p>
                <ToggleButtonA />
            </div>
        );
    }
}

export default ReleaseTimer;
