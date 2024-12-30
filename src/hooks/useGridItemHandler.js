import { useContext, useEffect, useState } from "react";
import {
  emptySelectedHandler,
  selectHandler,
} from "src/contexts/gameLogic/actionCreators";
import { GameContext } from "src/contexts/gameLogic/GameLogicContext";

const useGridItemHandler = (id) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    state: { first, last },
    dispatch,
  } = useContext(GameContext);

  const clickHandler = () => {
    if (!isFlipped) {
      setIsFlipped(!isFlipped);
      dispatch(selectHandler(id));
    }
  };

  useEffect(() => {
    if (first === last && id === first) {
      dispatch(emptySelectedHandler());
    } else if (last) {
      incorrectSelectedsHandler();
      dispatch(emptySelectedHandler());
    }
  }, [first, last]);

  const incorrectSelectedsHandler = () => {
    if (isFlipped && (id === first || id === last))
      setTimeout(() => {
        setIsFlipped(!isFlipped);
      }, 1000);
  };

  return { clickHandler, isFlipped };
};

export default useGridItemHandler;
