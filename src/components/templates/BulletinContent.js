import React from "react";
import { Container } from "react-bootstrap";

import "./BulletinContent.scss";
import { BulletinList } from "../organisms";
import { BulletinHeader, BulletinFooter } from "../molecules";

const BulletinContent = ({ bulletinId }) => {
  return (
    <Container className="flex-grow-1 bulletin-content">
      <BulletinHeader
        title="공지사항"
        description="공지사항 게시판 입니다라라라."
      />
      <BulletinList />
      <BulletinFooter />
    </Container>
  );
};

export default BulletinContent;
