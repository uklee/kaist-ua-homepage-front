import React from 'react';
import { Container, Button } from 'react-bootstrap';

const EditorFooter = () => {
    return (
        <Container className="border-top">
            <div className="d-flex justify-content-end py-3">
                <Button>작성 완료</Button>
            </div>
            
        </Container>
    );
};

export default EditorFooter;