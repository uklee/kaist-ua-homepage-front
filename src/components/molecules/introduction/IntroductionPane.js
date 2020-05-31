import React from "react";

import { default as Intro1 } from "./Intro1"
import { default as Intro2 } from "./Intro2"
import { default as Intro3 } from "./Intro3"
import { default as Intro4 } from "./Intro4"
import { default as Intro5 } from "./Intro5"

import { Tab } from "react-bootstrap";

const IntroductionPane = () => {
    return (
        <Tab.Content>
            <Tab.Pane eventKey="#1"><Intro1 /></Tab.Pane>
            <Tab.Pane eventKey="#2"><Intro2 /></Tab.Pane>
            <Tab.Pane eventKey="#3"><Intro3 /></Tab.Pane>
            <Tab.Pane eventKey="#4"><Intro4 /></Tab.Pane>
            <Tab.Pane eventKey="#5"><Intro5 /></Tab.Pane>
        </Tab.Content>
    );
}
export default IntroductionPane