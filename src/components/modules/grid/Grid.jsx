import randomImages from "src/utilities/randomImages";
import GridItem from "./GridItem";

const data = randomImages();
const Grid = () => {
  return (
    <div className="grid grid-cols-4 gap-2" dir="ltr">
      {data.map((image, index) => (
        <GridItem key={index} {...{ index, image }} />
      ))}
    </div>
  );
};

export default Grid;
