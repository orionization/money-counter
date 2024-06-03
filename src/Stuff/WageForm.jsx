import MoneyCounter from './MoneyCounter';
import { Button, Form, Input } from 'antd';
import React from 'react';

const WageForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  <>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    />
    <Form.Item label="wage" name="wage">
      <Input />
    </Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
    ;
  </>;
};
export default WageForm;
