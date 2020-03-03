import React, { Component } from "react";
import styles from "./SearchBar.module.scss";

class SearchBar extends Component {
    render() {
        return (
            <section className={styles.SearchBar}>
                <input type="text" placeholder="search artists..."></input>
                <button>Search</button>
            </section>
        );
    }
}

export default SearchBar;
