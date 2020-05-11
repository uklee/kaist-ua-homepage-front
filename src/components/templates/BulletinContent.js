import React from "react";
import { Container } from "react-bootstrap";
import "./BulletinContent.scss";
import { BulletinList } from "../organisms";
import { BulletinHeader, BulletinFooter } from "../molecules";
import { isEmpty } from "lodash";

const BulletinContent = ({ bulletins, bulletinId, posts }) => {
  if (isEmpty(bulletins)) return <div>로딩중...</div>;

  const bulletin = bulletins.find(bulletin => `${bulletin.id}` === bulletinId);

  const { title, description } = bulletin;

  return (
    <Container className="flex-grow-1 bulletin-content">
      <BulletinHeader title={title} description={description} />
      <BulletinList posts={posts} />
      <BulletinFooter />
    </Container>
  );
};

export default BulletinContent;
