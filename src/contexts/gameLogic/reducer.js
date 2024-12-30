import { SELECT, EMPTY_SELECTED, End_GAME, CUSTOMIZE } from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case SELECT:
      let newState;
      newState = state.first
        ? {
            ...state,
            last: action.payload,
          }
        : {
            ...state,
            first: action.payload,
          };
      return {
        ...newState,
        start: true,
        moveCount: state.moveCount - 1,
      };
    case EMPTY_SELECTED:
      const correctCount =
        state.last && state.first === state.last
          ? state.correctCount - 1
          : state.correctCount;
      return {
        ...state,
        last: null,
        first: null,
        correctCount,
      };
    case End_GAME:
      return {
        ...state,
        start: false,
        result: !state.correctCount,
      };

    case CUSTOMIZE:
      return {
        ...state,
        moveCount: Number(action.payload.moveCount),
        time: Number(action.payload.time),
      };
  }
};

export default reducer;
