import React, { Component } from "react";
import styles from "./Fan-ArtistSearch.module.scss";

class FanArtistSearch extends Component {
    render() {
        return(

            <section className = {styles.fanDashboardSearch}>
                <input type = "text" placeholder = "search artists.."></input>
                <button className = {styles.fanDashBoardSearchButton}>Search</button>
            </section>
        )
    }
}

export default FanArtistSearch;