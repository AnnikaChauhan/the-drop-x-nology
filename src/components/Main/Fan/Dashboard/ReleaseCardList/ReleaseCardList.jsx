import React, { Component } from "react";
import styles from "./ReleaseCardList.module.scss";
import ReleaseCard from "./ReleaseCard";

class ReleaseCardList extends Component {
    render() {
        return (
            <section className={styles.cardListWrapper}>
                {this.props.Releases.map((Release, index) => (
                    <ReleaseCard Releases={Release} key={index} />
                ))}
            </section>
        )
    }
}
               
export default ReleaseCardList;