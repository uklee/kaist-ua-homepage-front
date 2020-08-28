import React, { useState, useEffect } from "react";

import { Header, Footer, CustomModal } from "../organisms";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import * as cancelRequestAPI from "../../lib/api/cancelRequest";
import "./CancelRequestPage.scss";

const CancelRequestPage = () => {
  const [payment, setPayment] = useState(true); // true 대신 현재 상태 불러오기
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);

  const handleModalClose = () => {
    setShowSuccessModal(false);
    setShowFailModal(false);
  };

  const setPaymentState = () => {
    if (payment) {
      cancelRequestAPI
        .remove()
        .then(res => setShowSuccessModal(true))
        .catch(err => setShowFailModal(true));
    } else {
      cancelRequestAPI
        .write()
        .then(res => setShowSuccessModal(true))
        .catch(err => setShowFailModal(true));
    }
  };

  const applyCancelRequest = async () => {
    setPaymentState();
  };

  useEffect(() => {
    cancelRequestAPI.read().then(res => {
      setPayment(!res.data.exists);
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "NanumSquare"
      }}
      className="d-flex flex-column"
    >
      <CustomModal
        title={`저장되었습니다.`}
        show={showSuccessModal}
        handleConfirm={handleModalClose}
      />
      <CustomModal
        title={`⚠️오류가 발생했습니다.`}
        show={showFailModal}
        handleConfirm={handleModalClose}
      />
      <Header />
      <Container className="flex-grow-1 p-3">
        <div>
          <div
            style={{ fontSize: "25pt", fontFamily: "NanumSquare ExtraBold" }}
            className="mb-4 pb-1 border-bottom"
          >
            마이페이지
          </div>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="flex-fill center-block align-self-center">
            <p className="my-auto">2020년도 가을학기 학생회비 납부</p>
          </div>
          <ButtonGroup className="align-center">
            <Button
              className="button"
              variant={payment ? "primary" : "outline-primary"}
              onClick={() => setPayment(true)}
            >
              납부
            </Button>
            <Button
              className="button"
              variant={!payment ? "primary" : "outline-primary"}
              onClick={() => setPayment(false)}
            >
              미납부
            </Button>
          </ButtonGroup>
        </div>
        <Button
          className="float-right"
          variant="primary"
          onClick={applyCancelRequest}
        >
          저장
        </Button>
      </Container>
      <Footer />
    </div>
  );
};

export default CancelRequestPage;
