import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import "./AdminLoginModule.scss";
import logo from "../../static/logo/ua_logo.png";

const AdminLoginModule = props => {
  return (
    <div className="flex-grow-1 login-module d-flex flex-column">
      <a href="/" className="align-self-center">
        <img src={logo} className="logo" width="120px" alt="UA_logo" />
      </a>
      <Form classname="login-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button className="login-button" variant="dark" type="submit">
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default AdminLoginModule;
