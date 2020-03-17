import React from 'react';
import { Container } from 'react-bootstrap';
import { EditorHeader } from '../organisms';
import "./NoticeDetailContent.scss";

const EditorContent = () => {
    return (
        <Container className="flex-grow-1 notice-detail-content border">
            <EditorHeader />
            <div className="notice-content">
                여기에 에디터를 만들 예정<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    ==========================
                </div>
        </Container>
    )
};

export default EditorContent;