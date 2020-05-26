import React from "react";

import { ListGroup } from "react-bootstrap";

const IntroductionList = () => {
    const listData = [
        {
            link: "#1",
            title: "총학생회 소개"
        },
        {
            link: "#2",
            title: "회장단 인사말"
        },
        {
            link: "#3",
            title: "중앙집행위원회 소개"
        },
        {
            link: "#4",
            title: "의결기구 소개"
        },
        {
            link: "#5",
            title: "자치기구 소개"
        }
    ]
    return (
        <ListGroup>
            {listData.map(data => <ListGroup.Item action href={data.link}>{data.title}</ListGroup.Item>)}
        </ListGroup >
    );
}
export default IntroductionList