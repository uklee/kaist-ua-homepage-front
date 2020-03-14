import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import kaistLogo from "../../static/logo/kaist_logo.png";

const Footer = () => (
  <div style={{ backgroundColor: "#fff" }}>
    <Navbar as={Container}>
      <Nav className="mr-auto">
        <Navbar.Brand style={{ color: "#888" }}>
          <img src={kaistLogo} className="kaist-logo" alt="KAIST_logo" />
          <b>학부 총학생회</b>
        </Navbar.Brand>
      </Nav>
      <Nav>
        <Nav.Item>
          <img
            onClick={() =>
              window.location.assign(
                "https://www.facebook.com/kaistundergraduateassociation"
              )
            }
            className="social-media-logo"
            src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png"
            alt="instagram"
          />
        </Nav.Item>
        <Nav.Item>
          <img
            onClick={() =>
              window.location.assign(
                "https://www.facebook.com/kaistundergraduateassociation"
              )
            }
            className="social-media-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png"
            alt="facebook"
          />
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
        <Col md="1">
          <b>주소</b>
        </Col>
        <Col md="11">
          대전광역시 유성구 대학로291 | 한국과학기술원 N13-1 301호
        </Col>
      </Row>
      <Row>
        <Col md="1">
          <b>이메일</b>
        </Col>
        <Col md="11">kaistua@kaist.ac.kr</Col>
      </Row>
      <Row>
        <Col md="1">
          <b>전화</b>
        </Col>
        <Col md="11">042-350-2072</Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
