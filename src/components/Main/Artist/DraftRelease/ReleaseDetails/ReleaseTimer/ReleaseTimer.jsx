import React, { Component } from "react";
import styles from "./ReleaseTimer.module.scss";
import ToggleButtonB from "../ReleaseTimer/Toggle/Toggle";


class ReleaseTimer extends Component {
    render() {
        return (
            <div className={styles.announcementDate}>
{/*                
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                    /> */}
                    {/* <input
                        type="text"
                        id="day1"
                        placeholder="D"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day2"
                        placeholder="D"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day3"
                        placeholder="M"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day4"
                        placeholder="M"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day5"
                        placeholder="Y"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day6"
                        placeholder="Y"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day7"
                        placeholder="Y"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day8"
                        placeholder="Y"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day9"
                        placeholder="0"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day10"
                        placeholder="0"
                        maxLength="1"
                    />
                    <input
                        type="text"
                        id="day11"
                        placeholder="0"
                        maxLength="1"
                    />
                </div>
                <ToggleButtonB /> */}
            </div>
        );
    }
}

export default ReleaseTimer;
