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

// "power"   = const moveData = +useFetchMove(moves[x].move.url.slice(-3 or -2, -1) -> moveData.power
// "attack"  = user.xxxChoice.stats[1].base_stat / enemy.xxxEnemy.stats[1].base_stat
// "defence" = user.xxxChoice.stats[2].base_stat / enemy.xxxEnemy.stats[2].base_stat
export const calcDamage = (power, attack, defence) => {
  const formula1 = (2 * Math.floor((power * attack) / defence)) / 50 + 2;
  const formula2 = (Math.floor(Math.random() * (101 - 85)) + 85) / 25;
  return Math.floor(formula1 * formula2);
};

// useFetchMove is super inconvenient !!!!!!!!!!!!!
export const fetchMove = async (urls) => {
  const getData = async (url) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/move/${url}`);
      if (!response.ok) throw new Error("failed to load");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return await Promise.all(urls.map((url) => getData(url)));
};

export const conditions = (url) => {
  if (url.length === 33) return +url.slice(-2, -1);
  if (url.length === 34) return +url.slice(-3, -1);
  if (url.length === 35) return +url.slice(-4, -1);
};

export const returnData = (data) => {
  return {
    name: data.name,
    power: data.power,
    accuracy: data.accuracy,
    pp: data.pp,
  };
};
