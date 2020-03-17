import React from 'react';
import { Container } from 'react-bootstrap';
import { EditorHeader } from '../organisms';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./EditorContent.scss";

const EditorContent = () => {
    return (
        <Container className="flex-grow-1 border">
            <EditorHeader />
            <div className="flex-1 px-5 pt-3">
                <Editor 
                wrapperClassName = "border mb-3"
                editorClassName = "border Editor"
                />
                </div>
        </Container>
    )
};

export default EditorContent;