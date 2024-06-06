import MoneyCounter from './MoneyCounter';
import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';

const WageForm = () => {
  const onFinish = (value) => {
    //handles form submission
    //return <MoneyCounter />;
    <MoneyCounter wage={value} />;

    console.log('wage: ', value);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
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
      >
        <Form.Item
          label="Hourly Wage"
          name="wage"
          rules={[{ required: true, message: 'Please enter your wage' }]}
        >
          <InputNumber min={0.01} />
          <Button type="default" htmlType="submit" style={{ marginLeft: 8 }}>
            submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default WageForm;
