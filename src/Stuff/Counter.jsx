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
    <>
      <Row
        style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '20vh' }}
        justify="center"
      >
        <Col xs={24} sm={12} md={8} lg={6}>
          <MoneyCounter />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TimeCounter />
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
          <TimeControls />
        </Col>
      </Row>
      <Row
        style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '40vh' }}
        justify="center"
      >
        <Col xs={24} sm={12} md={8} lg={6}>
          <WageForm />
        </Col>
      </Row>
    </>
  );
};

export default Counter;
