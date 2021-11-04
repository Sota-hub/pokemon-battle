import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import useSound from "use-sound";
import cutIn from "../sounds/cut-in.mp3";

// Generate random number x times
export const randomNumber = (times) => {
  const numbers = [];
  for (let i = 0; i < times; i++) {
    const num = Math.floor(Math.random() * 897) + 1;
    if (!numbers.includes(num)) numbers.push(num);
    else times += 1;
  }
  return numbers;
};

export const CountDown = ({ time }) => {
  const history = useHistory();
  const [play] = useSound(cutIn);
  const { seconds = 60 } = time;
  const [[secs], setTime] = useState([seconds]);
  const tick = () => {
    if (secs === 1) {
      history.replace("/cutin");
      play();
    } else {
      setTime([secs - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p>{`${secs.toString()}`}</p>
    </div>
  );
};

// pick four moves randomly for fight command
export const pickRandomFourMoves = (array) => {
  // Prevent to mutate the state
  let copiedArray = [...array];
  let movesArray = [];

  while (movesArray.length < 4) {
    if (copiedArray.length < 4) {
      movesArray = copiedArray;
      break;
    }

    const randomMove = Math.floor(Math.random() * copiedArray.length);
    movesArray.push(copiedArray[randomMove]);
    copiedArray.splice(randomMove, 1);
  }

  return movesArray;
};
