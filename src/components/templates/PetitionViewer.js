import React from "react";

import { Loading } from "../atoms";

import { Container, Button } from "react-bootstrap";
import "./PostViewer.scss";

import { useTranslation } from "react-i18next";

import * as PetitionAPI from "../../lib/api/petition";

const PetitionViewer = ({ petition }) => {
  const { t } = useTranslation(["PostViewer", "Label"]);
  if (!petition) return <Loading />;

  const {
    korTitle,
    engTitle,
    korContent,
    engContent,
    Students,
    createdAt,
    id
  } = petition;
  const votes = Students.length;
  const boardLink = `/web/petition`;

  const boardTitle = { korTitle: "학생 청원", engTitle: "Student Petitions" };
  const title = { korTitle, engTitle };
  const content = { korContent, engContent };

  const vote = () => {
    if (!id) {
      alert("Error: petition not found");
    }
    PetitionAPI.vote(id)
      .then(res => {
        const status = res.status;
        if (status === 200) {
          alert(
            t("Label:label", {
              kor: "청원에 동의하셨습니다.",
              eng: "You have voted successfully."
            })
          );
        } else if (status === 204) {
          alert(
            t("Label:label", {
              kor: "이미 청원에 동의하셨습니다.",
              eng: "You have already voted for this petition."
            })
          );
        }
      })
      .catch(err => {
        const status = err.response.status;
        if (status === 400) {
          alert("Error: petition not found");
        } else if (status === 401) {
          alert(
            t("Label:label", {
              kor: "로그인을 해주세요.",
              eng: "Please log in."
            })
          );
        }
      });
  };

  return (
    <Container className="d-flex flex-column flex-grow-1 post-view">
      <div className="board-header">
        <a className="board-title" href={boardLink}>
          {t("title", { title: boardTitle })}
        </a>
      </div>
      <div className="post-title">{t("title", { title })}</div>
      <div className="d-flex flex-row">
        <div className="details">
          {t("votes", { votes })} |{" "}
          {typeof createdAt !== "undefined"
            ? createdAt.split(/T|.000Z/)[0]
            : ""}
        </div>
      </div>
      <div className="d-flex flex-grow-1 flex-column post-content">
        <div className="flex-grow-1">{t("content", { content })}</div>
        <Button className="petition-viewer-vote-button" onClick={vote}>
          {t("Label:label", {
            kor: "청원에 동의하기",
            eng: "Sign this petition"
          })}
        </Button>
      </div>
    </Container>
  );
};

export default PetitionViewer;
