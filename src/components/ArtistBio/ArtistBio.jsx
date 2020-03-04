import React, { Component } from "react";
import styles from "./ArtistBio.module.scss";
import TextEditor from "./TextEditor";


export default class ArtistBio extends Component {
    render() {
        return (
            <section className={styles.Bio}>
                <TextEditor />
            </section>
        )
    }
}