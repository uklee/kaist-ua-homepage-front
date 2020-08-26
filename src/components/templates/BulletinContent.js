import React from "react";
import { Container, Spinner } from "react-bootstrap";
import "./BulletinContent.scss";
import { BulletinList } from "../organisms";
import { BulletinHeader, BulletinFooter } from "../molecules";
import { isEmpty } from "lodash";

const BulletinContent = ({ bulletins, bulletinId, posts, isUser }) => {
  if (isEmpty(bulletins))
    return (
      <Container className="flex-grow-1 bulletin-loading">
        <Spinner animation="border" />
        <div>Loading...</div>
      </Container>
    );

  const bulletin = bulletins.find(bulletin => `${bulletin.id}` === bulletinId);

  const { title, description } = bulletin;

  return (
    <Container className="flex-grow-1 bulletin-content">
      <BulletinHeader title={title} description={description} isUser />
      <BulletinList posts={posts} isUser={isUser} />
      <BulletinFooter />
    </Container>
  );
};

export default BulletinContent;
