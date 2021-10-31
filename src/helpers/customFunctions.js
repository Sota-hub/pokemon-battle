import { useState, useEffect } from "react";
import { useHistory } from "react-router";

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

  const { seconds = 60 } = time;
  const [[secs], setTime] = useState([seconds]);
  const tick = () => {
    if (secs === 1) {
      history.replace("/cutin");
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
// export const PopUp = () => {};
