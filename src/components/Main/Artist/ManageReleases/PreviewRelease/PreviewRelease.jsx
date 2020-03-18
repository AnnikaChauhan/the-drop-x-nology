import React, { Component } from "react";
import styles from "./PreviewRelease.module.scss";
import Header from "../../../../Utility/Header";
import LoadingAnimation from "../../../../Utility/LoadingAnimation";
import { firestore } from "../../../../../firebase";

export default class PreviewRelease extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        const id = window.location.pathname.substring(
            window.location.pathname.lastIndexOf("/") + 1
        );
        firestore
            .collection("Releases")
            .doc(id)
            .get()
            .then(info => {
                this.setState({ data: info.data() });
            });
    }

    render() {
        if (!this.state.data) return <LoadingAnimation />;
        return (
            <section className={styles.PreviewRelease}>
                <Header title={"Preview Release"} />
                <div className={styles.media}>
                    <img src={this.state.data.Artwork} alt="Artwork" />
                    <div className={styles.banner}>
                        <div>
                            <h2>{this.state.data.ReleaseName}</h2>
                            <h3>
                                {this.state.data.ReleaseType} by{" "}
                                {this.state.data.Artist}
                            </h3>
                        </div>
                        <div className={styles.links}>
                            <article>
                                <i class="fas fa-user-circle"></i>
                                <p>Go to Artist</p>
                            </article>
                            <article>
                                <i class="fas fa-tshirt"></i>
                                <p>Merch</p>
                            </article>
                            <article>
                                <i class="fas fa-music"></i>
                                <p>Music Store</p>
                            </article>
                            <article>
                                <i class="fab fa-spotify"></i>
                                <p>Pre-save</p>
                            </article>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Adipisci mollitia in aliquam
                                assumenda ullam itaque numquam ducimus tempore
                                laboriosam? Veritatis inventore optio asperiores
                                architecto vero! Rem consequatur tenetur numquam
                                iste?
                            </p>
                        </div>
                        <div className={styles.drop}>
                            <p>Drops in</p>
                            <h2>12 Days</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
