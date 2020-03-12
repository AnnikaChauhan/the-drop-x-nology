import React, { Component } from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
    render() {
        return (
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    name=""
                    placeholder="Search"
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    onChange={this.props.onChange} 
                />
                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            </div>
        );
    }
}

export default SearchBar;
