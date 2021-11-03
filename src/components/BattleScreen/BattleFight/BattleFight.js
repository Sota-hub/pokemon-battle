import { useSelector } from "react-redux";
import classes from "./BattleFight.module.scss";
import { pickRandomFourMoves } from "../../../helpers/customFunctions";

const BattleFight = ({ isSecondPokemon }) => {
  const user = useSelector((state) => state.user.user);
  const firstPokemonMoves = pickRandomFourMoves(user.firstChoice.moves);
  const secondPokemonMoves = pickRandomFourMoves(user.secondChoice.moves);

  const moveFunction = () => console.log("Move");

  return (
    <div className={classes.menu_details}>
      {!isSecondPokemon &&
        firstPokemonMoves.map((move) => (
          <span
            className={classes.button}
            key={move.move.name}
            onClick={moveFunction}
          >
            {move.move.name}
          </span>
        ))}

      {isSecondPokemon &&
        secondPokemonMoves.map((move) => (
          <span
            className={classes.button}
            key={move.move.name}
            onClick={moveFunction}
          >
            {move.move.name}
          </span>
        ))}
    </div>
  );
};

export default BattleFight;
