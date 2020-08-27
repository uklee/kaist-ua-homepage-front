import React, { useState, useEffect } from "react";

import { Header, Footer } from "../organisms";
import { Container, Button, ButtonGroup, Modal, Row } from "react-bootstrap";
import * as cancelRequestAPI from "../../lib/api/cancelRequest";
import "./CancelRequestPage.scss"

const CancelRequestPage = () => {
    const id = window.sessionStorage.userId
    const [payment, setPayment] = useState(true);   // true 대신 현재 상태 불러오기
    let status;

    const checkPaymentState = async () => {
        const paymentState = await cancelRequestAPI.read(id)
        console.log(paymentState)
        setPayment(!paymentState.data.exists)
    }

    const setPaymentState = async (payment) => {
        let result = {}
        if (payment)
            result = await cancelRequestAPI.remove(id).catch(err => result.status = 404)
        else
            result = await cancelRequestAPI.write({ id }).catch(err => result.status = 404)
        console.log(result)
        return result.status
    }

    const applyCancelRequest = async () => {
        const resultState = await setPaymentState(payment)
        status = resultState
        handleShow()
    }

    useEffect(() => {
        checkPaymentState()
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div
            style={{
                minHeight: "100vh",
                fontFamily: "NanumSquare"
            }}
            className="d-flex flex-column"
        >
            <Header />
            <Container className="flex-grow-1 p-3">
                <div>
                    <div
                        style={{ fontSize: "25pt", fontFamily: "NanumSquare ExtraBold" }}
                        className="mb-4 pb-1 border-bottom">
                        마이페이지
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <div className="flex-fill center-block align-self-center">
                        <p className="my-auto">2020년도 가을학기 학생회비 납부</p>
                    </div>
                    <ButtonGroup className="align-center">
                        <Button className="button" variant={payment ? 'primary' : 'outline-primary'} onClick={() => setPayment(true)}>납부</Button>
                        <Button className="button" variant={!payment ? 'primary' : 'outline-primary'} onClick={() => setPayment(false)}>미납부</Button>
                    </ButtonGroup>
                </div>
                <Button className="float-right" variant="primary" onClick={applyCancelRequest}>저장</Button>
            </Container>
            <Footer />

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        {status === 200 ? 'Success' : 'Error'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{status === 200 ? '저장되었습니다.' : '오류가 발생하였습니다.'}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CancelRequestPage;
