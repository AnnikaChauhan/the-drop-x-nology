import React, { Component } from "react";
import styles from "./ReleaseCardList.module.scss";
import data from "../../../../static/data/data";
import ReleaseCard from "./ReleaseCard";

class ReleaseCardList extends Component {
    render() {
        return (
            <div className={styles.ReleaseCardList}>
                <h2>Upcoming Releases</h2>
                <section className={styles.cardListWrapper}>
                    {data.map((person, index) => (
                        <ReleaseCard cardData={person} key={index} />
                    ))}
                </section>
            </div>
        );
    }
}

export default ReleaseCardList;
