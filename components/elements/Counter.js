import React from "react";

const Counter = ({ setCounter, counter }) => {
  const increaseCounterHandler = () => {
    if (counter >= 5) {
      return;
    }
    setCounter(counter + 1);
  };

  const decreaseCounterHandler = () => {
    if (counter <= 1) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <div className="flex justify-center items-center gap-2 md:gap-3">
      <button
        onClick={decreaseCounterHandler}
        className="select-none text-gray-500 text-xl"
      >
        -
      </button>
      <p className=" select-none text-bluishCyan text-xl xl:text-2xl w-[30px] text-center">
        {counter}
      </p>
      <button
        onClick={increaseCounterHandler}
        className="select-none text-gray-500 text-xl"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
