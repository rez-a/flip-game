import { createContext, useReducer } from "react";
import reducer from "./reducer";
import data from "src/data";

export const GameContext = createContext();

const GameLogicPrivider = ({ children }) => {
  const initialState = {
    moveCount: import.meta.env.VITE_DEFAULT_MOVE_COUNT,
    time: import.meta.env.VITE_DEFAULT_TIME,
    result: null,
    first: null,
    last: null,
    correctCount: data.length,
    start: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameLogicPrivider;
