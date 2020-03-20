import React, { Component } from "react";
import styles from "./PhysicalURLs.module.scss";

export default class PhysicalURLs extends Component {
    render() {
        return (
            <div className={styles.URLs}>
                <h3>Physical URLs</h3>
                <div>
                    <h4>Music Store</h4>
                    <input type="url"
                        name="musicStore"
                        // value={this.props.formData.physicalURLs.musicStore}
                        value = {this.props.formData.musicStore}
                        onChange={this.props.handleInput} />
                    <h4>Merchandise</h4>
                    <input
                        type="url"
                        name="merchandise"
                        // value={this.props.formData.physicalURLs.merchandise}
                        value={this.props.formData.merchandise}
                        onChange={this.props.handleInput}

                    />
                </div>
                <hr />
            </div>
        );
    }
}
