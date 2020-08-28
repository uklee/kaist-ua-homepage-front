import React, { useState, useEffect } from "react";
import {
  Container,
  ProgressBar,
  Row,
  Col,
  Modal,
  Button,
  ButtonGroup
} from "react-bootstrap";
import { Header, Footer, CustomModal } from "../organisms";
import { withRouter } from "react-router-dom";
import { BulletinHeader } from "../molecules";

import * as paymentAPI from "../../lib/api/payment";
import * as cancelRequestAPI from "../../lib/api/cancelRequest";
import "./StudentFeePage.scss";

const StudentFeePage = () => {
  const [payments, setPayments] = useState([]);
  const [cancelPayment, setCancelPayment] = useState();

  const handleCancel = () => setCancelPayment(true);
  const handleNotCancel = () => setCancelPayment(false);

  const [show, setShow] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const handleModalClose = () => handleModalOpen("");
  const handleModalOpen = current => {
    setShow(current === "pay");
    setShowSuccessModal(current === "success");
    setShowFailModal(current === "fail");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (new Date() > new Date(2020, 8, 5)) {
      alert("납부 취소 기간이 지났습니다.");
      return;
    }
    setShow(true);
  };

  useEffect(() => {
    paymentAPI.list().then(res => {
      setPayments(res.data.payments);
    });
  }, []);

  const handleSubmit = () => {
    if (cancelPayment) {
      cancelRequestAPI
        .write({ year: 2020, semester: "fall" })
        .then(res => {
          handleModalOpen("success");
        })
        .catch(err => {
          handleModalOpen("fail");
        });
    } else {
      cancelRequestAPI
        .remove({ year: 2020, semester: "fall" })
        .then(res => {
          handleModalOpen("success");
        })
        .catch(err => {
          handleModalOpen("fail");
        });
    }
  };

  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column">
      <CustomModal
        title={`저장되었습니다.`}
        show={showSuccessModal}
        handleConfirm={handleModalClose}
      />
      <CustomModal
        title={`⚠️저장 중 오류가 발생했습니다.`}
        show={showFailModal}
        handleConfirm={handleModalClose}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>2020년도 가을학기 학생회비 납부</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <div>학생회비를 납부하시겠습니까?</div>
            </div>
            <ButtonGroup className="align-center">
              <Button
                variant={cancelPayment ? "outline-primary" : "primary"}
                className="button"
                onClick={handleNotCancel}
              >
                납부
              </Button>
              <Button
                variant={!cancelPayment ? "outline-primary" : "primary"}
                className="button"
                onClick={handleCancel}
              >
                미납부
              </Button>
            </ButtonGroup>
          </div>
          <div style={{ color: "#888", fontSize: "10pt", paddingTop: "15px" }}>
            납부를 선택하시면 첫 달(9월) 학자금에서 20,200원이 차감됩니다.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleSubmit}
            className="float-right"
            variant="primary"
          >
            저장
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <Container className="flex-grow-1 p-3">
        <BulletinHeader title="학생회비" />
        <Row>
          <Col sm={4} md={3} lg={2} style={{ fontSize: "14pt" }}>
            학생회비 납부 횟수
          </Col>
          <Col className="d-flex align-items-center">
            <ProgressBar
              className="flex-grow-1"
              now={(payments.length / 8) * 100}
              label={`${payments.length}/8회`}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ color: "#888", fontSize: "10pt" }}>
            2015년도 이전 기록은 포함되어 있지 않습니다.
          </Col>
        </Row>

        <div
          className="d-flex align-items-center modal-toggle"
          onClick={handleShow}
        >
          2020년 가을학기 학생회비 납부 선택 &gt;
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(StudentFeePage);
