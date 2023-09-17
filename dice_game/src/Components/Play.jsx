import { useState } from "react";

const Play = () => {
  const chooseArray = [1, 2, 3, 4, 5, 6];
  let [selectNumber, setSelectNumber] = useState();
  let [randomNumber, setRandomNumber] = useState(4);
  let [error, setError] = useState();
  let [total, setTotal] = useState(0);
  let diceImage = `./images/dice_${randomNumber}.png`;
  let random = () => {
    if (selectNumber) {
      randomNumber = Math.floor(Math.random() * 7);
      if (!randomNumber) {
        setRandomNumber(randomNumber + 1);
      } else {
        setRandomNumber(randomNumber);
      }
      result();
    } else {
      setError("please select the number");
    }
  };
  let reset = () => {
    setSelectNumber(0);
  };

  let result = () => {
    if (randomNumber == selectNumber) {
      setError("yeah ! match");
      setTotal(total + selectNumber);
      setTimeout(reset(), 1000);
    } else {
      setError("Noooo! not match");
      setTimeout(reset(), 1000);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="page w-[80%] flex justify-center flex-col">
        <div className="content_part flex justify-between items-center mt-5  md:flex-row flex-col">
          <div className="score text-center">
            <h1 className="text-[80px] font-bold">{total}</h1>
            <span className="text-[30px] font-medium ">Total Score</span>
          </div>
          <div className="choose  md:mt-0 mt-2">
            <p className="bg-yellow-300 p-3 my-3 text-center">choose the number</p>
            <div className="flex">
              {chooseArray.map((value, index) => (
                <p
                  id={selectNumber === value ? "selected" : ""}
                  onClick={() => setSelectNumber(value)}
                  key={index}
                  className="px-4 py-3 border-2 border-black mx-3 font-semibold"
                >
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="play_ground mt-8 mx-auto">
          <div className="click" onClick={random}>
            <img src={diceImage} alt="" />
          </div>
          <div className="error text-white bg-red-500 text-center p-3">
            {error ? error : "Result/Error"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
