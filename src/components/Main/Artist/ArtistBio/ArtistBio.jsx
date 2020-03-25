import React, { Component } from "react";
import styles from "./ArtistBio.module.scss";
import Header from "../../../Utility/Header";
import WYSIWYG from "../../../Utility/WYSIWYG";

export default class ArtistBio extends Component {
    render() {
        return (
            <section className={styles.Bio}>
                <Header title={"Artist Bio"} subtitle={"Create your profile bio"}/>
                <WYSIWYG />
            </section>
        );
    }
}
