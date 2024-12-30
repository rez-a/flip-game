import useTimerHandler from "src/hooks/useTimerHandler";

const Timer = () => {
  const { seconds, minutes } = useTimerHandler();

  return (
    <div className="flex items-center font-bold text-lg gap-3">
      <p>زمان : </p>
      <p className="min-w-12 text-left">
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </p>
    </div>
  );
};

export default Timer;
