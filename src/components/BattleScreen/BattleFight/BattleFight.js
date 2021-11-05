import { useSelector } from "react-redux";
import classes from "./BattleFight.module.scss";

import { useFetchMove } from "../../../hooks/useFetchMove";
import { calcDamage } from "../../../helpers/customFunctions";

const BattleFight = ({
  isSecondPokemon,
  firstPokemonMoves,
  secondPokemonMoves,
  damageHandler,
}) => {
  const user = useSelector((state) => state.user.user);
  const moveData = useFetchMove(+firstPokemonMoves[0].move.url.slice(-3, -1));
  const power = moveData.power;
  const attack = user.firstChoice.stats[1].base_stat;
  const defence = user.firstChoice.stats[2].base_stat;

  const moveHandler = () => {
    damageHandler(calcDamage(power, attack, defence));
  };

  // user.firstChoice.stats[5].base_stat "speed";

  return (
    <div className={classes.menu_details}>
      {!isSecondPokemon &&
        firstPokemonMoves.map((move, index) => (
          <span
            className={classes.button}
            id={index}
            key={move.move.name}
            onClick={moveHandler}
          >
            {move.move.name}
          </span>
        ))}

      {isSecondPokemon &&
        secondPokemonMoves.map((move) => (
          <span
            className={classes.button}
            key={move.move.name}
            onClick={moveHandler}
          >
            {move.move.name}
          </span>
        ))}
    </div>
  );
};

export default BattleFight;
