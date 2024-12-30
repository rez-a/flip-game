import { useContext, useEffect, useState } from "react";
import { endGameHandler } from "src/contexts/gameLogic/actionCreators";
import { GameContext } from "src/contexts/gameLogic/GameLogicContext";

const useTimerHandler = () => {
  const {
    state: { result, start, time },
    dispatch,
  } = useContext(GameContext);

  const [seconds, setSeconds] = useState(Math.floor(time % 60));
  const [minutes, setMinutes] = useState(Math.floor(time / 60));

  useEffect(() => {
    setSeconds(Math.floor(time % 60));
    setMinutes(Math.floor(time / 60));
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (result === null && start) {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
          dispatch(endGameHandler());
        }
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, start]);

  return { seconds, minutes };
};

export default useTimerHandler;
