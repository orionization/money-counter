import MoneyCounter from './MoneyCounter';

const TimeControls = (props) => {
  const [isRunning, setIsRunning] = useState(false); //use later to integrate button to start counter
  const [startOrPause, setStartOrPause] = useState('Start');

  <MoneyCounter isRunning={isRunning} startOrPause={startOrPause} />;

  return (
    <button
      onClick={() => {
        setIsRunning((prevState) => !prevState);
        setStartOrPause((prevState) =>
          prevState === 'Start' ? 'Pause' : 'Start'
        );
      }}
    >
      {startOrPause}
    </button>
  );
};
