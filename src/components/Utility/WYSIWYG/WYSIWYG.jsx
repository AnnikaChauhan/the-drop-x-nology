import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import SmallButton from "../Buttons/SmallButton";
import styles from "./WYSIWYG.module.scss";

export default class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty()
    };

    onEditorStateChange = editorState => {
        this.setState({ editorState });
    };

    render() {
        const { editorState } = this.state;
        return (
            <section>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName={styles.editor}
                    onEditorStateChange={this.onEditorStateChange}
                />
                <div className={styles.wysiWrapper}>
                    <SmallButton className={styles.wysiButton} text="Save" />
                    <SmallButton className={styles.wysiButton} text="Cancel" />
                </div>
            </section>
        );
    }
}
