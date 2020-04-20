import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import * as adminsAPI from "../../lib/api/admin";

import "./AdminLoginModule.scss";
import logo from "../../static/logo/ua_logo.png";
import { withRouter } from "react-router-dom";

const AdminLoginModule = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tryLogin = () => {
    adminsAPI
      .login({ email, password })
      .then(res => {
        console.log(res.data.accessToken);
        window.sessionStorage.accessToken = res.data.accessToken;
        window.sessionStorage.email = res.data.email;
        history.push("/");
      })
      .catch(err => {
        alert("로그인 정보가 일치하지 않습니다.");
      });
  };

  return (
    <div className="flex-grow-1 login-module d-flex flex-column">
      <a href="/" className="align-self-center">
        <img src={logo} className="logo" width="120px" alt="UA_logo" />
      </a>
      <Form className="login-form" onSubmit={tryLogin}>
        <Form.Group>
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            onChange={value => setEmail(value.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            onChange={value => setPassword(value.target.value)}
          />
        </Form.Group>
        <Button onClick={tryLogin} className="login-button" variant="dark">
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(AdminLoginModule);
