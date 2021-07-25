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

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["Footer"]);
  return (
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
            {t("학부 총학생회")}
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/ua.kaist"
            >
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id="tooltip-top">ua.kaist</Tooltip>}
              >
                <img
                  className="social-media-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png"
                  alt="instagram"
                />
              </OverlayTrigger>
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/kaistua_urc/"
            >
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id="tooltip-top">kaistua_flex</Tooltip>}
              >
                <img
                  className="social-media-logo"
                  src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png"
                  alt="facebook"
                />
              </OverlayTrigger>
            </a>
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
            <b>{t("주소")}</b>
          </Col>
          <Col lg="11" md="10">
            {t("대전광역시 유성구 대학로 291 | 카이스트 N13-1 301호")}
          </Col>
        </Row>
        <Row>
          <Col lg="1" md="2">
            <b>{t("이메일")}</b>
          </Col>
          <Col lg="11" md="10">
            kaistua@kaist.ac.kr
          </Col>
        </Row>
        <Row>
          <Col lg="1" md="2">
            <b>{t("전화")}</b>
          </Col>
          <Col lg="8" md="6">
            042-350-2072
          </Col>
          <Col lg="3" md="4">
            <div className="creators">
              <a href="https://github.com/winningarc">@winningarc</a>{" "}
              <a href="https://github.com/CoderLulu">@CoderLulu</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
