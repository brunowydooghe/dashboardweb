import { useState } from "react";
import { Button, Col, Form, Input, message, Row, Spin } from "antd";
import "./login.css";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import React from "react";

const LogIn = () => {
  const { login } = useAuth();
  const [form] = Form.useForm();

  const loginFunc = async () => {
    try {
      login(form.getFieldValue("email"), form.getFieldValue("password")).then(
        () => {
          setTimeout(() => {
            message.success("Welcome ,Your are logged in", 5);
          }, 500);
        }
      );
    } catch (error) {
      message.error("Email or Password is not correct", 5);
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <Row style={{ width: "100%", height: "100%" }}>
          <Col span={10}>
            <div className="background-div">
              <h2>
                Demo Dashboard!<br></br>
              </h2>
            </div>
          </Col>
          <Col span={14}>
            <div className="inputs-container">
              <div className="logo-container">
                <div className="logo"></div>
              </div>
              <div className="login-description">Login</div>
              <div className="login-form-container">
                <Form
                  form={form}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={loginFunc}
                >
                  <label style={{ top: 156 }} className="user-label">
                    Email
                  </label>
                  <Form.Item
                    name="email"
                    autoComplete="off"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      className="login-input"
                      autoComplete="none"
                      style={{ background: "#fff" }}
                    />
                  </Form.Item>
                  <label style={{ top: 212 }} className="pas-log-label">
                    Password
                  </label>
                  <Form.Item
                    name="password"
                    autoComplete="off"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="login-input"
                      autoComplete="none"
                      style={{ background: "#fff" }}
                    />
                  </Form.Item>
                  <div className="signup-link-div">
                    No account? &nbsp;<Link to="/signup">SignUp</Link>
                  </div>
                  <Form.Item
                    wrapperCol={{
                      offset: 17,
                      span: 17,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-btn"
                      data-testid="login-btn"
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LogIn;
