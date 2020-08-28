import React, { useState, useEffect } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { Header, Footer } from "../organisms";
import { withRouter } from "react-router-dom";
import { BulletinHeader } from "../molecules";

import * as paymentAPI from "../../lib/api/payment";

const StudentFeePage = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    paymentAPI.list().then(res => {
      setPayments(res.data.payments);
    });
  }, []);

  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column">
      <Header />
      <Container className="flex-grow-1 p-3">
        <BulletinHeader title="학생회비" />
        <ProgressBar
          now={(payments.length / 8) * 100}
          label={`${payments.length}/8회`}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(StudentFeePage);
