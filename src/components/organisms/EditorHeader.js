import React from 'react';
import { Container, Form } from 'react-bootstrap';
import "./EditorHeader.scss";

const EditorHeader = () => {
    return (
        <Container className="border-bottom mt-3">
            <Form>
                <Form.Group className="d-flex  align-items-center">
                    <Form.Label className="mb-0  Label">카테고리</Form.Label>
                    <Form.Control className="flex-1" as="select">
                        <option>공지사항</option>
                        <option>학생청원</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="d-flex  align-items-center">
                    <Form.Label className="mb-0 Label">글 제목</Form.Label>
                    <Form.Control className="flex-1" type="text" placeholder="제목"/>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default EditorHeader;