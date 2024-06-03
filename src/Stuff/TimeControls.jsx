import MoneyCounter from './MoneyCounter';
import TimeCounter from './TimeCounter';
import { useState } from 'react';
import { Button } from 'antd';

const TimeControls = (props) => {
  const [isRunning, setIsRunning] = useState(false);
  const [startOrPause, setStartOrPause] = useState('Start');

  <MoneyCounter isRunning={isRunning} startOrPause={startOrPause} />;

  return (
    <Button
      type="default"
      onClick={() => {
        setIsRunning((prevState) => !prevState);
        setStartOrPause((prevState) => (prevState === 'Start' ? 'Pause' : 'Start'));
      }}
    >
      {startOrPause}
    </Button>
  );
};
export default TimeControls;
