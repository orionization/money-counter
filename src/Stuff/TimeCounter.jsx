import { Statistic } from 'antd';
import React, { useState, useEffect } from 'react';

const TimeCounter = () => {
  // keep track of time
  const [time, setTime] = useState(0);

  // state to check if counter is running or not
  const [isRunning, setIsRunning] = useState(false); //use later with button, set initial state to false so the button can start it

  useEffect(() => {
    let addTenMs;
    if (isRunning) {
      // adding .01 every 10 milliseconds
      addTenMs = setInterval(() => {
        setTime((prevTime) => {
          return prevTime + 1;
        });
      }, 10);
    }
    return () => clearInterval(addTenMs); //not sure what this is doing - "The clearInterval function is returned in the cleanup function to stop the interval when the component unmounts"
  }, [isRunning, time]); // ^ if pushing the startAndStop button sets isRunning to false, won't setInterval stop running automatically? ******

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  const formatTime = () => {
    return (
      <div className="timecounter-container">
        {hours}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(2, '0')}
      </div>
    );
  };

  return <Statistic title="Time Elapsed" formatter={formatTime()} />;
};

export default TimeCounter;
