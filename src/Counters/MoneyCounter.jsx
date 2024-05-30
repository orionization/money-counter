import { CountUp } from 'countup.js';
import { Statistic } from 'antd';
//bezos makes 8961187 per hour
const wage = 15; // hourly rate
const ratePerSecond = (wage - wage * 0.12) / (60 * 60); //amount of money per second, second part is federal taxes
let endingValue = 100000000; //stops the count here
const timeToEnd = endingValue / ratePerSecond; //how many seconds does it take to get to endingValue

const moneyLogic = () => {
  window.onload = function () {
    var countUp = new CountUp('target', 2000);
    countUp.start();
  };
  /*<CountUp
      separator=","
      start={0}
      end={endingValue}
      decimals={2}
      duration={timeToEnd}
      useEasing={false}
      onPauseResume={({ reset, start, update }) => 'hello'}
      onEnd={() => console.log('wow you can quit your job now')}
    />*/
};

const MoneyCounter = (props) => {
  const { isRunning, startOrPause } = props;
  /*if (startOrPause === 'Pause') {
    //stop the count, display the paused value, is there a pause function in counter.js?
  } else {
  }*/
  return isRunning ? (
    <Statistic title="Money" formatter={moneyLogic} prefix={'$'} />
  ) : (
    <Statistic title="Money" value={0.0} prefix={'$'} />
  );
};

export default MoneyCounter;
