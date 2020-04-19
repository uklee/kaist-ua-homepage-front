import React from "react";
import { Container, Form } from "react-bootstrap";
import "./EditorHeader.scss";

const EditorHeader = ({
  onChangeField,
  title,
  author,
  bulletins,
  bulletinId
}) => {
  const onChangeTitle = e => {
    onChangeField({ key: "title", value: e.target.value });
  };

  const onChangeAuthor = e => {
    onChangeField({ key: "author", value: e.target.value });
  };

  const onChangeBulletin = e => {
    onChangeField({ key: "bulletinId", value: e.target.value });
  };

  if (!bulletins) return <div>로딩중...</div>;

  const options = bulletins.map((bulletin, index) => (
    <option value={index + 1}>{bulletin.title}</option>
  ));

  return (
    <Container className="border-bottom mt-3">
      <Form>
        <Form.Group className="d-flex  align-items-center">
          <Form.Label className="mb-0  Label">카테고리</Form.Label>
          <Form.Control
            className="flex-1"
            as="select"
            value={bulletinId}
            onChange={onChangeBulletin}
          >
            {options}
          </Form.Control>
        </Form.Group>
        <Form.Group className="d-flex  align-items-center">
          <Form.Label className="mb-0 Label">작성자</Form.Label>
          <Form.Control
            className="flex-1"
            type="text"
            placeholder="작성자"
            onChange={onChangeAuthor}
            value={author}
          />
        </Form.Group>
        <Form.Group className="d-flex  align-items-center">
          <Form.Label className="mb-0 Label">글 제목</Form.Label>
          <Form.Control
            className="flex-1"
            type="text"
            placeholder="제목"
            onChange={onChangeTitle}
            value={title}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default EditorHeader;
