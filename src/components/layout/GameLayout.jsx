import { useContext } from "react";
import Grid from "../modules/grid/Grid";
import MoveCount from "../modules/MoveCount";
import ShowResult from "../modules/ShowResult";
import Timer from "../modules/Timer";
import { GameContext } from "src/contexts/gameLogic/GameLogicContext";

const GameLayout = () => {
  const {
    state: { result },
  } = useContext(GameContext);
  return (
    <div className="h-screen w-screen flex  items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-between gap-8 w-full">
          <MoveCount />
          <Timer />
        </div>
        <Grid />
      </div>
      <ShowResult />
    </div>
  );
};

export default GameLayout;
