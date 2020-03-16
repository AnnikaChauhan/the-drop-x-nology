import React, { Component } from "react";
import styles from "./Tabs.module.scss";

export default class Tabs extends Component {
    state = {
        activeTab: this.props.tabs[0]
    };

    changeTab = event => {
        this.setState({ activeTab: event.target.innerText });
    };

    render() {
        return (
            <article>
                <div className={styles.tab}>
                    {this.props.tabs.map((tab, index) => (
                        <button
                            onClick={this.changeTab}
                            className={
                                this.state.activeTab === tab
                                    ? `${styles.active}`
                                    : null
                            }
                            key={index}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {this.props.content.map((elements, index) => (
                    <div
                        id={this.props.tabs[index]}
                        className={`${styles.tabcontent} ${
                            this.state.activeTab === this.props.tabs[index]
                                ? `${styles.open}`
                                : null
                        }`}
                        key={index}
                    >
                        {elements}
                    </div>
                ))}
            </article>
        );
    }
}
