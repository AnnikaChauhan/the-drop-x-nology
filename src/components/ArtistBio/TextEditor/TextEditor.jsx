import React, { Component } from "react";
// import { Editor, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from "draft-js";
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from "./TextEditor.module.scss";



// export default class MyEditor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { editorState: EditorState.createEmpty() };
//         this.onChange = editorState => this.setState({ editorState });
//     }
//     render() {
//         return (
//             <section className={styles.editor}>
//             <Editor editorState={this.state.editorState} onChange={this.onChange} />
//             <button>Save</button>
//             <button>Cancel</button>
//             </section>
//       );
//     }
// }


export default class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty()
    }

        onEditorStateChange: Function = (editorState) => { this.setState({editorState})};
     
    
    render() {

        const { editorState } = this.state;

        console.log(this.onEditorStateChange);
        return(
            <section>
                <Editor 
                    editorState={editorState}
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