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
                <Header
                    title={this.state.data.ReleaseName}
                    subtitle={`${this.state.data.ReleaseType} by  ${this.state.data.Artist}`}
                />
                <div className={styles.media}>
                    <div className={styles.artwork}>
                        <img
                            src={this.state.data.Artwork}
                            alt={`${this.state.data.Artist}'s artwork`}
                        />
                    </div>
                    <div className={styles.banner}>
                        <div className={styles.drop}>
                            <p>Drops in</p>
                            <h2>12 Days</h2>
                        </div>
                        <div className={styles.links}>
                            <article>
                                <i className="fas fa-user-circle"></i>
                                <p>Go to Artist</p>
                            </article>
                            <article>
                                <i className="fas fa-tshirt"></i>
                                <p>Merch</p>
                            </article>
                            <article>
                                <i className="fas fa-music"></i>
                                <p>Music Store</p>
                            </article>
                            <article>
                                <i className="fab fa-spotify"></i>
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
                    </div>
                </div>
            </section>
        );
    }
}
