import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { Button, Form } from "react-bootstrap";
import logo from "../../static/logo/ua_logo_kor.png";
import "./AdminLoginModule.scss";

import * as adminsAPI from "../../lib/api/admin";

import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../modules/auth";

const AdminLoginModule = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const tryLogin = async () => {
    adminsAPI
      .login({ email, password })
      .then(res => {
        dispatch(setAuth(res.data));
      })
      .catch(err => {
        alert("로그인 정보가 일치하지 않습니다.");
      });
  };

  if (auth === "admin") {
    history.push("/web/main");
  }

  return (
    <div className="flex-grow-1 login-module d-flex flex-column">
      <a href="/web" className="align-self-center">
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
        <Button type="submit" className="login-button" variant="dark">
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(AdminLoginModule);
