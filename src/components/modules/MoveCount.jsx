import useMoveCountHandler from "src/hooks/useMoveCountHandler";

const MoveCount = () => {
  const { moveCount } = useMoveCountHandler();

  return (
    <div className="flex items-center font-bold text-lg gap-2">
      <p>تعداد حرکت :</p>
      <p>{moveCount}</p>
    </div>
  );
};

export default MoveCount;
