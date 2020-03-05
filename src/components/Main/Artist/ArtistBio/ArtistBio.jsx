import React, { Component } from "react";
import styles from "./ArtistBio.module.scss";
import WYSIWYG from "../../../Utility/WYSIWYG";

export default class ArtistBio extends Component {
    render() {
        return (
            <section className={styles.Bio}>
                <WYSIWYG />
            </section>
        );
    }
}
