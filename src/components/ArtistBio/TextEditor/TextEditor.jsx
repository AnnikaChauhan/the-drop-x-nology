import React, { Component } from "react";

import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from "./TextEditor.module.scss";


export default class TextEditor extends Component {
    render() {
        return(
            <section>
                <Editor 
                    // editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName={styles.editor}
                    onEditorStateChange={this.onEditorStateChange}/>
                <button>Save</button>
                <button>Cancel</button>
            </section>
        )
    }
}

// "editorClassName"