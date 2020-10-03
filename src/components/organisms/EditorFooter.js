import React from "react";
import { Container, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const EditorFooter = ({ onCancel, onWrite }) => {
  const { t } = useTranslation(["Label"]);
  return (
    <Container>
      <div className="d-flex justify-content-end py-3">
        <Button onClick={onWrite} className="mr-3">
          {t("label", { kor: "작성 완료", eng: "Submit" })}
        </Button>
        <Button onClick={onCancel}>
          {t("label", { kor: "취소", eng: "Cancel" })}
        </Button>
      </div>
    </Container>
  );
};

export default EditorFooter;
