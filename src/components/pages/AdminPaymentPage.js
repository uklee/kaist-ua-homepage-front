import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import ReactFileReader from "react-file-reader";
import { Header, Footer, CustomModal } from "../organisms";
import { withRouter } from "react-router-dom";
import { BulletinHeader } from "../molecules";

import * as paymentAPI from "../../lib/api/payment";

const AdminPaymentPage = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  const years = [];
  const semesterMap = new Map();
  var i;
  for (i = CURRENT_YEAR; i >= 2010; i--) {
    const spring = `${i}년 봄학기`;
    const fall = `${i}년 가을학기`;
    years.push(fall);
    years.push(spring);
    semesterMap[spring] = { year: i, semester: "spring" };
    semesterMap[fall] = { year: i, semester: "fall" };
  }

  const [year, setYear] = useState(semesterMap[years[0].year]);
  const [semester, setSemester] = useState(semesterMap[years[0].semester]);
  const [idList, setIdList] = useState([]);
  const [fileName, setFileName] = useState(null);
  const [selectedOption, setSelectedOption] = useState(years[0]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);

  const handleModalClose = () => handleModalOpen("");
  const handleModalOpen = current => {
    setShowConfirmModal(current === "confirm");
    setShowSuccessModal(current === "success");
    setShowFailModal(current === "fail");
  };

  var c = 0;
  const options = years.map(option => <option key={c++}>{option}</option>);

  const verifyIdList = fileContent => {
    const studentIds = [];
    for (i = 0; i < fileContent.length; i++) {
      const currentRow = fileContent[i].split(",");
      var j;
      for (j = 0; j < currentRow.length; j++) {
        const currentValue = currentRow[j].trim();
        if (currentValue.length === 8 && currentValue.startsWith("20")) {
          studentIds.push(currentValue);
        }
      }
    }
    return studentIds;
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

  const handleSemester = event => {
    setSelectedOption(event.target.value);
    const { year, semester } = semesterMap[selectedOption];
    setYear(year);
    setSemester(semester);
  };

  const handleSubmit = () => {
    const body = {
      ku_std_no_list: idList,
      year,
      semester
    };
    paymentAPI
      .upload(body)
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
        title={`${selectedOption} 학생회비 납부 기록`}
        body={`${fileName}를 등록하시겠습니까?`}
        show={showConfirmModal}
        handleConfirm={handleSubmit}
        handleClose={handleModalClose}
      />
      <CustomModal
        title={`등록이 완료되었습니다.`}
        show={showSuccessModal}
        handleConfirm={handleModalClose}
      />
      <CustomModal
        body={`⚠️등록 중 오류가 발생했습니다.`}
        show={showFailModal}
        handleConfirm={handleModalClose}
      />
      <Header />
      <Container className="flex-grow-1 p-3">
        <BulletinHeader title="학생회비 납부자 등록" />
        <Form>
          <Form.Group>
            <Form.Label>학기 선택</Form.Label>
            <Form.Control onChange={handleSemester.bind(this)} as="select">
              {options}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>파일 선택</Form.Label>
            <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
              <Button variant="outline-primary">업로드</Button>
            </ReactFileReader>
            <Form.Text className="text-muted">
              납부자 목록(학번)을 담은 Excel 파일을 .csv 유형으로 저장한 뒤
              올려주세요.
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
