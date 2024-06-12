import { useState } from 'react';
import React from 'react';
import { Col, Row, Statistic } from 'antd';
import TimeCounter from './TimeCounter';
import MoneyCounter from './MoneyCounter';
import { Button, Form, Input, InputNumber } from 'antd';

//const timeCounter = () => <TimeCounter />;
//const moneyCounter = () => <MoneyCounter />;

const Counter = () => {
  const [wage, setWage] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [startOrPause, setStartOrPause] = useState('Start');

  const onFinish = (value) => {
    setWage(value.wage);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row
        style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '20vh' }}
        justify="center"
      >
        <Col xs={24} sm={12} md={8} lg={6}>
          <MoneyCounter wage={wage} startOrPause={startOrPause} isRunning={isRunning} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TimeCounter startOrPause={startOrPause} isRunning={isRunning} />
        </Col>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          height: '15vh',
          margin: 'auto',
        }}
        justify="center"
      >
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button
            type="default"
            onClick={() => {
              setIsRunning((prevState) => !prevState);
              setStartOrPause((prevState) => (prevState === 'Start' ? 'Pause' : 'Start'));
            }}
          >
            {startOrPause}
          </Button>
        </Col>
      </Row>
      <Row
        style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '40vh' }}
        justify="center"
      >
        <Col xs={24} sm={12} md={8} lg={6}>
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
              </Form.Item>
              <Button type="default" htmlType="submit" style={{ marginLeft: 8 }}>
                submit
              </Button>
            </Form>
          </>
        </Col>
      </Row>
    </>
  );
};

export default Counter;
