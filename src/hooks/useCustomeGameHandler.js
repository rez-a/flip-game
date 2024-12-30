import { useContext, useState } from "react";
import { ModalContext } from "src/components/modules/modal/Modal";
import { customizeHandler } from "src/contexts/gameLogic/actionCreators";
import { GameContext } from "src/contexts/gameLogic/GameLogicContext";

const useCustomeGameHandler = () => {
  const { setIsOpen } = useContext(ModalContext);

  const {
    state: { moveCount, time },
    dispatch,
  } = useContext(GameContext);

  const [custome, setCustome] = useState({
    time,
    moveCount,
  });

  const [error, setError] = useState({
    time: false,
    moveCount: false,
  });

  const onChangeHanddler = (e) => {
    const value = e.target.value;
    setCustome({ ...custome, [e.target.id]: value });
    !Number(value)
      ? setError({ ...error, [e.target.id]: true })
      : setError({ ...error, [e.target.id]: false });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(customizeHandler(custome));
    setIsOpen(false);
  };

  return {
    moveCount,
    time,
    custome,
    error,
    onChangeHanddler,
    onSubmitHandler,
    setIsOpen,
  };
};
export default useCustomeGameHandler;
