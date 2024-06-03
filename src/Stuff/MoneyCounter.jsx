import CountUp from 'react-countup';
import { Statistic, Button } from 'antd';
import React, { useRef } from 'react';
import TimeControls from './TimeControls';
//bezos makes 8961187 per hour
const sampleWage = 15; // hourly rate
const moneyLogic = (wage, countUpRef) => {
  //const { start, wage, countUpRef } = props; use later when taking form input

  const ratePerSecond = (wage - wage * 0.12) / (60 * 60); //amount of money per second, second part is federal taxes
  const endingValue = 100000000; //stops the count here
  const timeToEnd = endingValue / ratePerSecond; //how many seconds does it take to get to endingValue

  return (
    <CountUp
      separator=","
      start={0}
      end={endingValue}
      decimals={2}
      duration={timeToEnd}
      useEasing={false}
      ref={countUpRef} //returns a reference to itself for pause and resume methods
      onPauseResume={(startOrPause) => {
        console.log('Paused');
      }}
      onEnd={() => console.log('wow you can quit your job now')}
    />
  );
};
console.log('moneyLogic:', moneyLogic());

const MoneyCounter = (props) => {
  const { isRunning, startOrPause, wage } = props;
  const countUpRef = useRef(null); //pass this to Counter component to get ref of Counter component
  const handlePause = () => {
    countUpRef.current.pause();
  };
  const handleResume = () => {
    countUpRef.current.resume();
  };

  return (
    <>
      {isRunning ? (
        <Statistic
          title="Money"
          formatter={moneyLogic(sampleWage, countUpRef)} //replace sampleWage with wage when I set that up
          prefix={'$'}
        />
      ) : (
        <Statistic title="Money" value={0.0} prefix={'$'} />
      )}
    </>
  );
};

export default MoneyCounter;
