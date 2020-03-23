import React, { Component } from "react";
import styles from "./ReleaseCardList.module.scss";
import ReleaseCard from "./ReleaseCard";



class ReleaseCardList extends Component {   
    render() {
        return (
            <section className={styles.cardListWrapper}>
                {this.props.releases.map((release, index) => (
                    <ReleaseCard release={release} key={index} />
                ))}
            </section>
        );
    }
}

export default ReleaseCardList;
