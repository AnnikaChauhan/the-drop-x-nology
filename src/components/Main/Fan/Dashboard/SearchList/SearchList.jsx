import React, { Component } from "react";
import styles from "./SearchList.module.scss";
import SearchCard from "./SearchCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class SearchList extends Component {
    render() {
        return (
            <section className={styles.cardWrapper}>
                
                {this.props.artists.map((artist, index) => (
                    <SearchCard update={this.props.update} key={index} userinfo={this.props.userinfo} artist={artist} />
                ))}
            </section>
        );
    }
}
