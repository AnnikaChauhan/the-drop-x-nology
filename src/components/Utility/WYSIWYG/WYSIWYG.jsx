import React, { Component } from 'react';
// // import Editor from '@stfy/react-editor.js';
import Header from '@editorjs/header';
import EditorJs from "react-editor-js";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Table from "@editorjs/table";
import Delimiter from "@editorjs/delimiter";


// import { EDITOR_JS_TOOLS } from "./constants";

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
                this.setState({data});
            });
    }

    render() {
        return (
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
        );
    }
}
