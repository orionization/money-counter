import CountUp from 'react-countup';
import { Statistic, Button } from 'antd';
import React, { useRef } from 'react';

//bezos makes 8961187 per hour

const MoneyCounter = (props) => {
  const { wage, startOrPause, isRunning } = props;

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
        <Statistic title="Money" formatter={moneyLogic} prefix={'$'} />
      ) : (
        <Statistic title="Money" value={0.0} prefix={'$'} />
      )}
    </>
  );
};

export default MoneyCounter;
