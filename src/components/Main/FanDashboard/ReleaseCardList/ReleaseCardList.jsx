import React, { Component } from "react";
import styles from "./ReleaseCardList.module.scss";
import data from "../../../../static/data/data";
import CardComponent from "../../../Utility/CardTemplates/Card";

class ReleaseCardList extends Component {
    render() {
        return (
            <div className={styles.ReleaseCardList}>
                <h2>Upcoming Releases</h2>
                <section className={styles.cardListWrapper}>
                    {data.map((person, index) => (
                        <CardComponent cardData={person} key={index} />
                    ))}
                </section>
            </div>
        );
    }
}

export default ReleaseCardList;
