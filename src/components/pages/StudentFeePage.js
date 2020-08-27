import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Header, Footer, CustomModal } from "../organisms";
import { withRouter } from "react-router-dom";
import { BulletinHeader } from "../molecules";

import * as paymentAPI from "../../lib/api/payment";

const StudentFeePage = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column">
      <Header />
      <Container className="flex-grow-1 p-3">
        <BulletinHeader title="학생회비" />
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(StudentFeePage);
