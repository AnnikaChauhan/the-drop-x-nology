import React, { Component } from 'react';
import styles from './SearchList.module.scss';
import SearchCard from './SearchCard';

export default class SearchList extends Component {
    render() {
        return (
            <section className={styles.cardWrapper}>
                {this.props.Releases.map((artist, index) => (
                    <SearchCard key={index} Releases={artist} />
                ))}
                
            </section>
        )
    }
}