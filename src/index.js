import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CountUp from 'react-countup';
import Counter from './Counters/Counter.jsx';
import { Statistic } from 'antd';
import TimeCounter from './Counters/TimeCounter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
);

//15 per hour, .25 per minute, .00417 per second

reportWebVitals();

//future said get a money counter
