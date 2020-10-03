import React from "react";
import { useSelector } from "react-redux";
import { Container, Form } from "react-bootstrap";
import { EditorFormGroup } from "../molecules";
import "./EditorHeader.scss";
import { useTranslation } from "react-i18next";

const PetitionEditor = ({ onChangeField }) => {
  const { t } = useTranslation(["Label"]);

  const onChange = (key, e) => {
    onChangeField({ key, value: e.target.value });
  };

  const petition = useSelector(({ petition }) => petition);

  return (
    <Container className="border-bottom mt-3">
      <Form>
        <EditorFormGroup
          label={t("label", { kor: "제목 (한글)", eng: "Title (Korean)" })}
          onChange={e => onChange("korTitle", e)}
          value={petition.korTitle}
        />
        <EditorFormGroup
          label={t("label", { kor: "제목 (영어)", eng: "Title (English)" })}
          onChange={e => onChange("engTitle", e)}
          value={petition.engTitle}
        />
        <EditorFormGroup
          label={t("label", { kor: "내용 (한글)", eng: "Content (Korean)" })}
          onChange={e => onChange("korContent", e)}
          value={petition.korContent}
          controlAs="textarea"
          rows="5"
        />
        <EditorFormGroup
          label={t("label", { kor: "내용 (영어)", eng: "Content (English)" })}
          onChange={e => onChange("korContent", e)}
          value={petition.korContent}
          controlAs="textarea"
          rows="5"
        />
      </Form>
    </Container>
  );
};

export default PetitionEditor;
