import { useState, useEffect } from "react";
<<<<<<< Updated upstream
=======
import { useHistory } from "react-router";
import useSound from "use-sound";
import cutIn from "../sounds/cut-in.mp3";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
  const history = useHistory();
  const [play, { stop }] = useSound(cutIn);
>>>>>>> Stashed changes
  const { seconds = 60 } = time;
  const [[secs], setTime] = useState([seconds]);
  const [ticking, setTicking] = useState(true);
  const tick = () => {
<<<<<<< Updated upstream
    if (secs === 0) {
      reset();
      setTicking(false);
=======
    if (secs === 1) {
      history.replace("/cutin");
      play();
>>>>>>> Stashed changes
    } else {
      setTime([secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(seconds)]);

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
