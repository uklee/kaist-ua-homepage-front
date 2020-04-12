import React from "react";

import { Header, Footer } from "../organisms";
import { BulletinContent } from "../templates";

const BulletinPage = ({ match }) => {
  const { bulletinId } = match.params;

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#eee" }}
      className="d-flex flex-column"
    >
      <Header />
      <BulletinContent bulletinId={bulletinId} />
      <Footer />
    </div>
  );
};

export default BulletinPage;
