import React from "react";
import { Container } from "react-bootstrap";
import "./BoardContent.scss";
import { BoardList } from "../organisms";
import { BoardHeader, PetitionBoardFooter } from "../molecules";
import { Loading } from "../atoms";
import { isEmpty } from "lodash";

const PetitionBoardContent = ({ petitions }) => {
  return (
    <Container className="flex-grow-1 board-content">
      <BoardHeader
        title={{ korTitle: "학생 청원", engTitle: "Student Petitions" }}
        description={{ korDescription: "", engDescription: "" }}
      />
      <BoardList petitions={petitions} />
      <PetitionBoardFooter />
    </Container>
  );
};

export default PetitionBoardContent;
