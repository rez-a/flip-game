import { useContext, useEffect } from "react";
import { endGameHandler } from "src/contexts/gameLogic/actionCreators";
import { GameContext } from "src/contexts/gameLogic/GameLogicContext";

const useMoveCountHandler = () => {
  const {
    state: { moveCount },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    if (!moveCount) dispatch(endGameHandler());
  }, [moveCount]);

  return { moveCount };
};

export default useMoveCountHandler;
