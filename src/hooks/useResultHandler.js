import { useContext, useEffect } from "react";
import { endGameHandler } from "src/contexts/gameLogic/actionCreators";
import { GameContext } from "src/contexts/gameLogic/GameLogicContext";

const useResultHandler = () => {
  const {
    state: { result, correctCount },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    if (!correctCount) dispatch(endGameHandler());
  }, [correctCount]);

  return { result };
};
export default useResultHandler;
