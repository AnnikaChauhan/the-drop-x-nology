import React, { Component } from "react";
import styles from "./TextEditor.module.scss";
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export default class TextEditor extends Component {
    render() {
        return(
            <Editor
                // editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}/>
        )
    }
}