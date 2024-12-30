import GameLogicPrivider from "src/contexts/gameLogic/GameLogicContext";

const Providers = ({ children }) => {
  return <GameLogicPrivider>{children}</GameLogicPrivider>;
};

export default Providers;
