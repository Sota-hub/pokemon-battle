import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./BattleFight.module.scss";
import { useFetchMove } from "../../../hooks/useFetchMove";
import { calcDamage } from "../../../helpers/customFunctions";

const BattleFight = ({
  isSecondPokemon,
  isFirstEnemyDead,
  firstPokemonMoves,
  secondPokemonMoves,
  firstEnemyMoves,
  secondEnemyMoves,
  damageHandler,
  damageHandlerE,
  setMoveMessage,
  setMoveUsed,
}) => {
  const user = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.enemy);
  const [moveNumber, setMoveNumber] = useState(0);
  const zeroToThree = Math.floor(Math.random() * 4);

  const url = isSecondPokemon
    ? secondPokemonMoves[moveNumber].move.url
    : firstPokemonMoves[moveNumber].move.url;

  const urlE = isFirstEnemyDead
    ? secondEnemyMoves[zeroToThree].move.url
    : firstEnemyMoves[zeroToThree].move.url;

  const data = useFetchMove(
    (url.length === 33 && +url.slice(-2, -1)) ||
      (url.length === 34 && +url.slice(-3, -1)) ||
      (url.length === 35 && +url.slice(-4, -1))
  );

  const dataE = useFetchMove(
    (urlE.length === 33 && +urlE.slice(-2, -1)) ||
      (urlE.length === 34 && +urlE.slice(-3, -1)) ||
      (urlE.length === 35 && +urlE.slice(-4, -1))
  );

  const power = data.power;
  const attack = user.firstChoice.stats[1].base_stat;
  const defence = user.firstChoice.stats[2].base_stat;

  const powerE = dataE.power;
  const attackE = enemy.firstEnemy.stats[1].base_stat;
  const defenceE = enemy.firstEnemy.stats[2].base_stat;

  const moveHandler = (index) => {
    setMoveNumber(index);
  };

  const decideMove = () => {
    const userSpeed = isSecondPokemon
      ? user.secondChoice.stats[5].base_stat
      : user.firstChoice.stats[5].base_stat;

    const enemySpeed = isFirstEnemyDead
      ? enemy.secondEnemy.stats[5].base_stat
      : enemy.firstEnemy.stats[5].base_stat;

    const userMoving = () => {
      damageHandler(calcDamage(power, attack, defence));
      setMoveMessage(data.name);
      setMoveUsed("User used");
    };

    const enemyMoving = () => {
      damageHandlerE(calcDamage(powerE, attackE, defenceE));
      setMoveMessage(dataE.name);
      setMoveUsed("Enemy used");
    };

    if (userSpeed > enemySpeed) {
      userMoving();
      // if( enemyPokemonHp =< 0 ) return
      setTimeout(() => {
        enemyMoving();
      }, 3000);
    }
    if (userSpeed < enemySpeed) {
      enemyMoving();
      // if( userPokemonHp =< 0 ) return
      setTimeout(() => {
        userMoving();
      }, 3000);
    }
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
