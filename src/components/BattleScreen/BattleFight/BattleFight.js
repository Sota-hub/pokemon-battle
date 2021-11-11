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
  const userFirstPokemon = useSelector((state) => state.user.pokemon[0]);
  const userSecondPokemon = useSelector((state) => state.user.pokemon[1]);
  const enemyFirstPokemon = useSelector((state) => state.enemy.pokemon[0]);
  const enemySecondPokemon = useSelector((state) => state.enemy.pokemon[1]);
  const isLastPokemon = useSelector((state) => state.user.isLastPokemon);
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

  // ========================== Variable and Function for decideMove ==========================
  const enemyMoveNumber = Math.floor(Math.random() * 4);

  const damage = (pokemon, number) => {
    return calcDamage(
      pokemon.moves[number].power,
      pokemon.attack,
      pokemon.defence
    );
  };

  let userDamage = damage(fightingUserPokemon, moveNumber);
  let enemyDamage = damage(fightingEnemyPokemon, enemyMoveNumber);

  const userMove = () => {
    dispatch(userAction(userDamage));
    setMessage(
      `${fightingUserPokemon.name} used ${fightingUserPokemon.moves[moveNumber].name}`
    );
  };

  const enemyMove = () => {
    dispatch(enemyAction(enemyDamage));
    setMessage(
      `${fightingEnemyPokemon.name} used ${fightingEnemyPokemon.moves[enemyMoveNumber].name}`
    );
  };

  let stop = false;

  const judgeUserDying = () => {
    if (fightingUserPokemon.hp.current - userDamage <= 0) {
      if (!isLastPokemon) {
        dispatch(userActions.setIsLastPokemon());
        dispatch(userActions.toggleIsSecondPokemon());
        stop = true;
      }
      if (isLastPokemon) {
        console.log("YOU LOSE...");
        stop = true;
      }
    }
  };

  const judgeEnemyDying = () => {
    if (fightingEnemyPokemon.hp.current - enemyDamage <= 0) {
      if (!isSecondEnemy) {
        dispatch(enemyActions.setIsSecondEnemy(true));
        stop = true;
      }
      if (isSecondEnemy) {
        console.log("YOU WIN!");
        stop = true;
      }
    }
  };
  // ==========================================================================================

  const decideMove = () => {
    if (fightingUserPokemon.speed > fightingEnemyPokemon.speed) {
      userMove();
      judgeEnemyDying();
      if (stop) return;
      setTimeout(() => {
        enemyMove();
        judgeUserDying();
      }, 2500);
    }

    if (fightingUserPokemon.speed < fightingEnemyPokemon.speed) {
      enemyMove();
      judgeUserDying();
      if (stop) return;
      setTimeout(() => {
        userMove();
        judgeEnemyDying();
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
