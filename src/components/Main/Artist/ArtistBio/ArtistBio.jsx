import React, { Component } from "react";
import styles from "./ArtistBio.module.scss";
import WYSIWYG from "../../../Utility/WYSIWYG";
import Header from "../../../Utility/Header";

export default class ArtistBio extends Component {
    render() {
        return (
            <section className={styles.Bio}>
                <Header title={"Artist Bio"} />
                <WYSIWYG />
            </section>
        );
    }
}
