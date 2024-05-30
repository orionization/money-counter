import { useState } from 'react';
import React from 'react';
import { Col, Row, Statistic } from 'antd';
import TimeCounter from './TimeCounter';
import MoneyCounter from './MoneyCounter';
import TimeControls from './TimeControls';

const timeCounter = () => <TimeCounter />;
const moneyCounter = () => <MoneyCounter />;
const Counter = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <MoneyCounter isRunning={isRunning} startOrPause={startOrPause} />
      </Col>
      <Col span={12}>
        <Statistic title='Time Elapsed' formatter={timeCounter} />
      </Col>
      <Row></Row>
      <Col>
        <TimeControls />
      </Col>
    </Row>
  );
};

export default Counter;
