import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./BattleFight.module.scss";
import { useFetchMove } from "../../../hooks/useFetchMove";
import { calcDamage } from "../../../helpers/customFunctions";

const BattleFight = ({
  isSecondPokemon,
  firstPokemonMoves,
  secondPokemonMoves,
  damageHandler,
  setMoveMessage,
  setMoveSource,
}) => {
  const user = useSelector((state) => state.user.user);
  const [moveNumber, setMoveNumber] = useState(0);

  const data = useFetchMove(
    // https://pokeapi.co/api/v2/move/ === count:844
    (firstPokemonMoves[moveNumber].move.url.length === 33 &&
      +firstPokemonMoves[moveNumber].move.url.slice(-2, -1)) ||
      (firstPokemonMoves[moveNumber].move.url.length === 34 &&
        +firstPokemonMoves[moveNumber].move.url.slice(-3, -1)) ||
      (firstPokemonMoves[moveNumber].move.url.length === 35 &&
        +firstPokemonMoves[moveNumber].move.url.slice(-4, -1))
  );
  const power = data.power;
  const attack = user.firstChoice.stats[1].base_stat;
  const defence = user.firstChoice.stats[2].base_stat;

  const moveHandler = (index) => {
    setMoveNumber(index);
  };

  const decideMove = () => {
    damageHandler(calcDamage(power, attack, defence));
    setMoveMessage(data.name);
    setMoveSource("User");
    // user.firstChoice.stats[5].base_stat "speed";
  };

  return (
    <div className={classes.menu_details}>
      {!isSecondPokemon &&
        firstPokemonMoves.map((move, index) => (
          <span
            className={classes.button}
            id={index}
            key={move.move.name}
            onClick={() => moveHandler(index)}
          >
            {move.move.name}
          </span>
        ))}

      {isSecondPokemon &&
        secondPokemonMoves.map((move, index) => (
          <span
            className={classes.button}
            id={index}
            key={move.move.name}
            onClick={() => moveHandler(index)}
          >
            {move.move.name}
          </span>
        ))}
      <span onClick={decideMove}>Decide</span>
    </div>
  );
};

export default BattleFight;
