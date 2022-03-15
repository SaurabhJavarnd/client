import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';

const Login = () => {
  return (
    <Form
      name="basic"
      wrapperCol={{
        span: 8,

      }}
      labelCol={{
        span: 8,
      }}
    >
      <h1>Login Page</h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
        <Checkbox>Remember me</Checkbox>
        <Button type="primary ml-2 mt-4" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
