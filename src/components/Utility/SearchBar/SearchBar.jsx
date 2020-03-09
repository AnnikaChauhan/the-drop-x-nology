import React, { Component } from "react";
import styles from "./SearchBar.module.scss";
import SmallButton from "../Buttons/SmallButton";

class SearchBar extends Component {
    render() {
        return (
            <section className={styles.SearchBar}>
                <input type="text" placeholder={this.props.placeHolder}></input><SmallButton text={"Search"} />
            </section>
        );
    }
}

export default SearchBar;
