import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./BattleFight.module.scss";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/userSlice";
import { enemyActions } from "../../../store/enemySlice";
import { calcDamage } from "../../../helpers/customFunctions";

const BattleFight = ({ setMessage }) => {
  const [moveNumber, setMoveNumber] = useState(0);
  const isSecondPokemon = useSelector((state) => state.user.isSecondPokemon);
  const isSecondEnemy = useSelector((state) => state.enemy.isSecondEnemy);
  const userFirstPokemon = useSelector((state) => state.user.userFirstPokemon);
  const userSecondPokemon = useSelector(
    (state) => state.user.userSecondPokemon
  );
  const enemyFirstPokemon = useSelector(
    (state) => state.enemy.enemyFirstPokemon
  );
  const enemySecondPokemon = useSelector(
    (state) => state.enemy.enemySecondPokemon
  );
  const dispatch = useDispatch();

  const moveHandler = (index) => {
    setMoveNumber(index);
  };

  const fightingUserPokemon = isSecondPokemon
    ? userSecondPokemon
    : userFirstPokemon;

  const fightingEnemyPokemon = isSecondEnemy
    ? enemySecondPokemon
    : enemyFirstPokemon;

  const userAction = isSecondEnemy
    ? enemyActions.damageEnemySecondPokemon
    : enemyActions.damageEnemyFirstPokemon;

  const enemyAction = isSecondPokemon
    ? userActions.damageUserSecondPokemon
    : userActions.damageUserFirstPokemon;

  const damage = (pokemon, number) => {
    setMessage(`${pokemon.name} used ${pokemon.moves[number].name}`);
    return calcDamage(
      pokemon.moves[number].power,
      pokemon.attack,
      pokemon.defence
    );
  };

  const userMove = () => {
    dispatch(userAction(damage(fightingUserPokemon, moveNumber)));
  };

  const enemyMove = () => {
    const enemyMoveNumber = Math.floor(Math.random() * 4);
    dispatch(enemyAction(damage(fightingEnemyPokemon, enemyMoveNumber)));
  };

  const decideMove = () => {
    if (fightingUserPokemon.speed > fightingEnemyPokemon.speed) {
      userMove();
      setTimeout(() => {
        enemyMove();
      }, 2500);
    }

    if (fightingUserPokemon.speed < fightingEnemyPokemon.speed) {
      enemyMove();
      setTimeout(() => {
        userMove();
      }, 2500);
    }
  };

  return (
    <div className={classes.menu_details}>
      {!isSecondPokemon &&
        userFirstPokemon.moves.map((move, index) => (
          <span
            className={classes.button}
            key={move.name}
            onClick={() => moveHandler(index)}
          >
            {move.name}
          </span>
        ))}

      {isSecondPokemon &&
        userSecondPokemon.moves.map((move, index) => (
          <span
            className={classes.button}
            key={move.name}
            onClick={() => moveHandler(index)}
          >
            {move.name}
          </span>
        ))}
      <span onClick={decideMove}>Decide</span>
    </div>
  );
};

export default BattleFight;
