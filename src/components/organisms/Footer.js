import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import "./Footer.scss";
import logo from "../../static/logo/kaist_logo.png";

const Footer = () => (
  <div className="footer">
    <Navbar as={Container}>
      <Nav className="mr-auto">
        <Navbar.Brand
          style={{
            color: "#888",
            fontFamily: "NanumSquare ExtraBold"
          }}
        >
          <img src={logo} className="kaist-logo" alt="KAIST_logo" />
          학부 총학생회
        </Navbar.Brand>
      </Nav>
      <Nav>
        <Nav.Item>
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={<Tooltip id="tooltip-top">ua.kaist</Tooltip>}
          >
            <img
              onClick={() =>
                window.location.assign("https://www.facebook.com/ua.kaist")
              }
              className="social-media-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png"
              alt="instagram"
            />
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={<Tooltip id="tooltip-top">kaistua_flex</Tooltip>}
          >
            <img
              onClick={() =>
                window.location.assign("https://www.instagram.com/kaistua_flex")
              }
              className="social-media-logo"
              src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png"
              alt="facebook"
            />
          </OverlayTrigger>
        </Nav.Item>
      </Nav>
    </Navbar>
    <Container
      style={{
        paddingBottom: "15px",
        paddingLeft: "20px",
        fontSize: "10pt",
        color: "#888"
      }}
    >
      <Row>
        <Col lg="1" md="2">
          <b>주소</b>
        </Col>
        <Col lg="11" md="10">
          대전광역시 유성구 대학로 291 | 카이스트 N13-1 301호
        </Col>
      </Row>
      <Row>
        <Col lg="1" md="2">
          <b>이메일</b>
        </Col>
        <Col lg="11" md="10">
          kaistua@kaist.ac.kr
        </Col>
      </Row>
      <Row>
        <Col lg="1" md="2">
          <b>전화</b>
        </Col>
        <Col lg="11" md="10">
          042-350-2072
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
