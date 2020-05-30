import React from "react";

import { Header, Footer } from "../organisms";
import BulletinContentContainer from "../containers/bulletin/BulletinContentContainer";

const BulletinPage = props => {
  const { bulletinId } = props.match.params;
  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <Header active={props.isUser ? 100 + bulletinId : bulletinId} />
      <BulletinContentContainer isUser bulletinId={bulletinId} />
      <Footer />
    </div>
  );
};

export default BulletinPage;
