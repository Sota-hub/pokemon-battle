import { useSelector } from "react-redux";
import classes from "./BattleDisplay.module.scss";

const BattleDisplay = ({
  onFight,
  onChange,
  onItem,
  isSecondPokemon,
  isFirstEnemyDead,
  firstEnemyHitPoint,
  secondEnemyHitPoint,
  firstPokemonHitPoint,
  secondPokemonHitPoint,
}) => {
  const user = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.enemy);

  const firstUserName = user.firstChoice.forms[0].name;
  const secondUserName = user.secondChoice.forms[0].name;
  const firstEnemyName = enemy.firstEnemy.forms[0].name;
  const secondEnemyName = enemy.secondEnemy.forms[0].name;

  return (
    <div className={classes.display}>
      <div className={classes.enemy_hp}>
        <p>{isFirstEnemyDead ? secondEnemyName : firstEnemyName}</p>
        <progress
          className={classes.hp_bar}
          id="hp"
          value={isFirstEnemyDead ? secondEnemyHitPoint : firstEnemyHitPoint}
          max={
            isFirstEnemyDead
              ? enemy.secondEnemy.stats[0].base_stat
              : enemy.firstEnemy.stats[0].base_stat
          }
        ></progress>
      </div>
      <div className={classes.user_image}>
        <img
          src={
            isSecondPokemon
              ? user.secondChoice.sprites.back_default
              : user.firstChoice.sprites.back_default
          }
          alt={isSecondPokemon ? secondUserName : firstUserName}
        />
      </div>
      <div className={classes.user_hp}>
        <p>{isSecondPokemon ? secondUserName : firstUserName}</p>
        <progress
          className={classes.hp_bar}
          id="hp"
          value={isSecondPokemon ? secondPokemonHitPoint : firstPokemonHitPoint}
          max={
            isSecondPokemon
              ? user.secondChoice.stats[0].base_stat
              : user.firstChoice.stats[0].base_stat
          }
        ></progress>
      </div>
      <div className={classes.enemy_image}>
        <img
          src={
            isFirstEnemyDead
              ? enemy.secondEnemy.sprites.front_default
              : enemy.firstEnemy.sprites.front_default
          }
          alt={isFirstEnemyDead ? secondEnemyName : firstEnemyName}
        />
      </div>
      <ul className={classes.link_container}>
        <li className={classes.link_style} onClick={onFight}>
          Fight
        </li>
        <li className={classes.link_style} onClick={onChange}>
          Change
        </li>
        <li className={classes.link_style} onClick={onItem}>
          Item
        </li>
      </ul>
    </div>
  );
};

export default BattleDisplay;
