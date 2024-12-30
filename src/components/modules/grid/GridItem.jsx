import useGridItemHandler from "src/hooks/useGridItemHandler";

const GridItem = ({ index, image: { id, src } }) => {
  const { clickHandler, isFlipped } = useGridItemHandler(id);

  return (
    <div
      className="w-20 h-20 text-xl transform-style-3d relative backface-hidden"
      onClick={clickHandler}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-rose-500 text-white flex items-center justify-center cursor-pointer rounded transform-style-3d ease-in-out transition-all duration-500 hover:bg-rose-700 ${
          isFlipped ? "transform-perspective-500-rotateX-180 z-0" : "z-10"
        }`}
      >
        {index + 1}
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full text-white flex items-center justify-center cursor-pointer rounded transform-style-3d ease-in-out transition-all duration-500 overflow-hidden ${
          isFlipped
            ? "transform-perspective-500-rotateX-360 z-10"
            : "transform-perspective-500-rotateX-180 z-0"
        }`}
      >
        <img className="w-full h-full" src={src} alt="image" />
      </div>
    </div>
  );
};

export default GridItem;
