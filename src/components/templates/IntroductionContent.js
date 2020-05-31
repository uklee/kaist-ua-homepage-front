import React from "react";

import { default as IntroductionList } from "../molecules/introduction/IntroductionList"
import { default as IntroductionPane } from "../molecules/introduction/IntroductionPane"
import { Row, Col, Tab, Container } from "react-bootstrap";

import "./IntroductionContent.scss";

const IntroductionContent = () => {
    //const introList = introData.data.map(data => <ListGroup.Item action href={data.link}>{data.title}</ListGroup.Item>);
    //const introContent = introData.data.map(data => <Tab.Pane eventKey={data.link}>{data.content}</Tab.Pane>);
    return (
        <Container className="flex-grow-1 introduction-content">
            <div className="introduction-header-title">총학 소개</div>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#1">
                <Row>
                    <Col sm={3}>
                        <IntroductionList />
                    </Col>
                    <Col sm={9}>
                        <IntroductionPane />
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default IntroductionContent;
