import React, { Component } from "react";
import styles from "./ReleaseCardList.module.scss";
import data from "../../static/data/data";
import ReleaseCard from "../ReleaseCard/ReleaseCard";



class ReleaseCardList extends Component {
    render() {
        return (
            <section className={styles.cardListWrapper}>
                {data.map((person, index) => (
                    <ReleaseCard cardData={person} key={index} />
                ))}
            </section>
        )
    }
}

{/* <ReleaseCard /> */}
               
export default ReleaseCardList;