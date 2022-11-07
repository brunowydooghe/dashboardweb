import { useState } from "react";
import { Button, Col, Form, Input, message, Row, Select, Spin } from "antd";
import "./login.css";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import React from "react";

function SignUp() {
  const { Option } = Select;
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [form] = Form.useForm();

  const register = async () => {
    try {
      login(form.getFieldValue("email"), form.getFieldValue("password")).then(
        () => {
          message.success("Welcome ,Your are logged in", 5);
        }
      );
    } catch (error) {
      message.error(error.message, 5);
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <Spin spinning={loading}>
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
                <div className="logo-container"></div>
                <div className="login-description">SignUp</div>
                <div className="login-form-container">
                  <Form
                    form={form}
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={register}
                  >
                    <label style={{ top: 156 }} className="user-label">
                      First Name
                    </label>
                    <Form.Item
                      name="firstName"
                      autoComplete="off"
                      rules={[
                        {
                          required: true,
                          message: "Please input your First Name!",
                        },
                      ]}
                    >
                      <Input
                        className="login-input"
                        autoComplete="none"
                        style={{ background: "#fff" }}
                      />
                    </Form.Item>
                    <label style={{ top: 212 }} className="user-label">
                      Last Name
                    </label>
                    <Form.Item
                      name="lastName"
                      autoComplete="off"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Last Name!",
                        },
                      ]}
                    >
                      <Input
                        className="login-input"
                        autoComplete="none"
                        style={{ background: "#fff" }}
                      />
                    </Form.Item>
                    <label style={{ top: 268 }} className="user-label">
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
                        type="email"
                        className="login-input"
                        autoComplete="none"
                        style={{ background: "#fff" }}
                      />
                    </Form.Item>
                    <label style={{ top: 324 }} className="pas-label">
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
                      Already an account? &nbsp;<Link to="/">LogIn</Link>
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
                      >
                        SignUp
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Spin>
    </div>
  );
}

export default SignUp;
