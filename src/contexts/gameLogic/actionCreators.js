import { SELECT, EMPTY_SELECTED, End_GAME, CUSTOMIZE } from "./actionTypes";

const selectHandler = (id) => {
  return {
    type: SELECT,
    payload: id,
  };
};

const emptySelectedHandler = () => {
  return {
    type: EMPTY_SELECTED,
  };
};

const endGameHandler = () => {
  return {
    type: End_GAME,
  };
};

const customizeHandler = (customizedData) => {
  return {
    type: CUSTOMIZE,
    payload: customizedData,
  };
};

export {
  selectHandler,
  emptySelectedHandler,
  endGameHandler,
  customizeHandler,
};
