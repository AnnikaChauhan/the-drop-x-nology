import React, { Component } from "react";
import styles from "./ReleaseCard.module.scss";

// Class containing JSX & methods associated with the ReleaseCard component

class ReleaseCardComponent extends Component {
    render() {
        return(
            <section className={styles.releaseCard}>
                <header>
                    <h2></h2>
                </header>
                    <img src="" alt=""/>
                    <h3></h3>
            </section>
        );
    }
}

export default ReleaseCardComponent;
