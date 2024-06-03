import { useState } from 'react';
import React from 'react';
import { Col, Row, Statistic } from 'antd';
import TimeCounter from './TimeCounter';
import MoneyCounter from './MoneyCounter';
import TimeControls from './TimeControls';
import WageForm from './WageForm';

const timeCounter = () => <TimeCounter />;
const moneyCounter = () => <MoneyCounter />;
const Counter = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <MoneyCounter />
      </Col>
      <Col span={12}>
        <TimeCounter />
      </Col>
      <Row></Row>
      <Col>
        <TimeControls />
      </Col>
      <Row></Row>
      <Col>
        <WageForm />
      </Col>
    </Row>
  );
};

export default Counter;
