import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import ReactFileReader from "react-file-reader";
import { Header, Footer, CustomModal } from "../organisms";
import { withRouter } from "react-router-dom";
import { BoardHeader } from "../molecules";

import * as paymentAPI from "../../lib/api/payment";

const AdminPaymentPage = () => {
  const [idList, setIdList] = useState([]);
  const [fileName, setFileName] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);

  const handleModalClose = () => handleModalOpen("");
  const handleModalOpen = current => {
    setShowConfirmModal(current === "confirm");
    setShowSuccessModal(current === "success");
    setShowFailModal(current === "fail");
  };

  const verifyIdList = fileContent => {
    const studentDataCollection = [];
    for (var i = 3; i < fileContent.length - 1; i++) {
      const currentRow = fileContent[i].split(",");
      const studentId = currentRow[1].trim();
      const studentData = [studentId];
      for (var j = 13; j < currentRow.length; j++) {
        const currentValue = currentRow[j].trim();
        studentData.push(currentValue);
      }
      studentDataCollection.push(studentData);
    }
    return studentDataCollection;
  };

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      setIdList(verifyIdList(reader.result.split("\n")));
    };
    setFileName(files[0].name);
    reader.readAsText(files[0]);
  };

  const handleSubmit = () => {
    const body = {
      studentDataCollection: idList
    };
    paymentAPI
      .bulkUpload(body)
      .then(res => {
        handleModalOpen("success");
      })
      .catch(err => handleModalOpen("fail"));
  };

  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <CustomModal
        title={`학생회비 납부 기록`}
        body={`${fileName}를 등록하시겠습니까?`}
        show={showConfirmModal}
        handleConfirm={handleSubmit}
        handleClose={handleModalClose}
        closeMessage="취소"
        confirmMessage="확인"
      />
      <CustomModal
        title={`등록이 완료되었습니다.`}
        show={showSuccessModal}
        handleConfirm={handleModalClose}
        confirmMessage="확인"
      />
      <CustomModal
        title={`⚠️등록 중 오류가 발생했습니다.`}
        show={showFailModal}
        handleConfirm={handleModalClose}
        confirmMessage="확인"
      />
      <Header />
      <Container className="flex-grow-1 p-3">
        <BoardHeader title="학생회비 납부자 등록" />
        <Form>
          <Form.Group>
            <Form.Label>파일 선택</Form.Label>
            <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
              <Button variant="outline-primary">업로드</Button>
            </ReactFileReader>
            <Form.Text className="text-muted">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/spreadsheets/d/1bZ2ED5DMh4NHTSkaYJ7MRE6egMOi6Ms3yjYUKFEGnw0/edit#gid=0"
              >
                이 파일
              </a>
              과 같은 형식을 .csv로 저장한 뒤 올려주세요. <br />새 학기에 대한
              납부 정보를 추가 할 경우, 맨 오른쪽에 열을 추가해주세요.
            </Form.Text>
            <Form.Text className="text-muted">
              {fileName
                ? `선택된 파일: ${fileName}, 납부자 총 ${idList.length}명`
                : "선택된 파일 없음"}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Button
              disabled={fileName ? false : true}
              onClick={() => handleModalOpen("confirm")}
            >
              등록
            </Button>
          </Form.Group>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(AdminPaymentPage);
