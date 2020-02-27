import React, { Component } from "react";
import styles from "./DraftRelease.module.scss";

class DraftRelease extends Component {
    render() {
        return (
            <section>
                <article>
                    <h1>Manage Release</h1>
                    <div>
                        <button>SAVE</button>
                        <button>PREVIEW</button>
                        <button>PUBLISH</button>
                    </div>
                </article>
                <article>
                    <h4>Type</h4>
                    <input type="radio" name="type" id="" value="Single"/>
                    <input type="radio" name="type" id="" value="EP"/>
                    <input type="radio" name="type" id="" value="Album"/>
                    <input type="radio" name="type" id="" value="Other"/>
                </article>
            </section>
        )
    }
}