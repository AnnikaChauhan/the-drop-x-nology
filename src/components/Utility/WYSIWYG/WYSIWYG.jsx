import React, { Component } from 'react';
import Header from '@editorjs/header';
import EditorJs from "react-editor-js";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Table from "@editorjs/table";
import Delimiter from "@editorjs/delimiter";
import SmallButton from "../Buttons/SmallButton";
import styles from "./WYSIWYG.module.scss";

export default class WYSIWYG extends Component {
    state = {
        data: {}
    }

    constructor(props) {
        super(props);
        this.editor = React.createRef();
    }

    handleChange() {
        this.editor.current.instance
            .save()
            .then((data) => {
                this.setState({ data });
            });
    }

    render() {
        return (
            <>
                <EditorJs
                
                    ref={this.editor}
                    onChange={() => this.handleChange()}
                    data={this.state.data}
                    tools={{
                        marker: Marker,
                        list: List,
                        header: Header,
                        table: Table,
                        delimiter: Delimiter
                    }}
                />
                <div className={styles.wysiWrapper}>
                    <SmallButton className={styles.wysiButton} text="Save" />
                    <SmallButton className={styles.wysiButton} text="Cancel" />
                </div>
            </>

        );
    }
}
