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


















// export default class WYSIWYG extends Component {

//     render() {
//         onReady: () => { console.log('Editor.js is ready to work!') }

//         /**
//          * onChange callback
//          */
//         onChange: () => { console.log('Now I know that Editor\'s content changed!') }
//         return (
//             <p>Hello</p>
//         )
//     }



// }



// export default class WYSIWYG extends Component {
//     state = {
//         savedData: {}
//     }


//     async handleSave() {
//         const savedData = this.editorInstance.save();
//         this.setState({ savedData });
//         // this.setState({ editor });
//     }

//     componentDidMount() {
//         console.log(this.editorInstance);
//     }

//     render() {
//         console.log(this.state);
//         return (
//             <>
//                 <EditorJs 
//                     instanceRef={instance => this.editorInstance = instance}
//                     onChange={this.handleSave}
//                     onReady={() => console.log("it workes")}
//                     tools={{ 
//                         marker: Marker,
//                         list: List,
//                         header: Header,
//                         table: Table,
//                         delimiter: Delimiter
//                     }}
//                 />
//             </>
//         )
//     }
// }






// import React, { Component } from "react";
// // import { Editor, EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import { EditorState, convertToRaw, ContentState } from 'draft-js';
// import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';
// // import htmlToDraft from 'html-to-draftjs';

// import SmallButton from "../Button/SmallButton";
// import styles from "./WYSIWYG.module.scss";
// import EditorJS from '@editorjs/editorjs';

// export default class EditorJS extends Component {
//     render(){
//         return(
//             <EditorJS holder="custom">
//                 <p>Hola</p>
//                 </EditorJS>

//         )
//     }

// }





// export default class TextEditor extends Component {

//     state = {
//         editorState: EditorState.createEmpty()
//     }

//     onEditorStateChange = (editorState) => { 

//         this.setState({ editorState });
//     }

//     render() {

//         const { editorState } = this.state;

//         console.log("Editor state: ", editorState);

//         return(
//             <section>
//                 <Editor 
//                     editorState={this.state.editorState}
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName={styles.editor}
//                     onEditorStateChange={this.onEditorStateChange}/>
//                     <div className={styles.wysiWrapper}>
//                     <SmallButton className={styles.wysiButton} text="Save" />
//                     <SmallButton className={styles.wysiButton} text="Cancel"/>
//                     </div>

//                      {/* <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} */}
//             </section>
//         )
//     }
// }