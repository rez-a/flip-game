import data from "src/data";

const randomImages = () => {
  const randomArray = [...data, ...data];

  for (let index in randomArray) {
    const randomIndex = Math.floor(Math.random() * randomArray.length);
    [randomArray[index], randomArray[randomIndex]] = [
      randomArray[randomIndex],
      randomArray[index],
    ];
  }
  return randomArray;
};

export default randomImages;
