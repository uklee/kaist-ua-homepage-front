import React from "react";

import { Header, Footer } from "../organisms";
import BulletinContentContainer from "../containers/bulletin/BulletinContentContainer";

const BulletinPage = ({ match }) => {
  const { bulletinId } = match.params;

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#eee" }}
      className="d-flex flex-column"
    >
      <Header />
      <BulletinContentContainer bulletinId={bulletinId} />
      <Footer />
    </div>
  );
};

export default BulletinPage;
