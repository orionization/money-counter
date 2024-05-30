import { useState } from 'react';
import React from 'react';
import { Col, Row, Statistic } from 'antd';
import TimeCounter from './TimeCounter';
import MoneyCounter from './MoneyCounter';

const timeCounter = () => <TimeCounter />;
const moneyCounter = () => <MoneyCounter />;
const Counter = () => {
  const [isRunning, setIsRunning] = useState(false); //use later to integrate button to start counter
  const [startOrPause, setStartOrPause] = useState('Start');

  return (
    <Row gutter={16}>
      <Col span={12}>
        <MoneyCounter isRunning={isRunning} startOrPause={startOrPause} />
      </Col>
      <Col span={12}>
        <Statistic title="Time Elapsed" formatter={timeCounter} />
      </Col>
      <Row>
        <button
          onClick={() => {
            setIsRunning((prevState) => !prevState);
            setStartOrPause((prevState) => (prevState === 'Start' ? 'Pause' : 'Start'));
          }}
        >
          {startOrPause}
        </button>
      </Row>
    </Row>
  );
};

export default Counter;
