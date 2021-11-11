import { useSelector } from "react-redux";
import classes from "./BattleDisplay.module.scss";

const BattleDisplay = ({ setCommand }) => {
  const isSecondPokemon = useSelector((state) => state.user.isSecondPokemon);
  const isSecondEnemy = useSelector((state) => state.enemy.isSecondEnemy);
  const userPokemon = useSelector((state) => state.user.pokemon);
  const enemyPokemon = useSelector((state) => state.enemy.pokemon);
  const userFirstPokemonHp = useSelector((state) => state.user.pokemon[0].hp);
  const userSecondPokemonHp = useSelector((state) => state.user.pokemon[1].hp);
  const enemyFirstPokemonHp = useSelector((state) => state.enemy.pokemon[0].hp);
  const enemySecondPokemonHp = useSelector(
    (state) => state.enemy.pokemon[1].hp
  );

  const fightingUserPokemon = isSecondPokemon ? userPokemon[1] : userPokemon[0];

  const fightingEnemyPokemon = isSecondEnemy
    ? enemyPokemon[1]
    : enemyPokemon[0];

  const fightingUserPokemonHp = isSecondPokemon
    ? userSecondPokemonHp
    : userFirstPokemonHp;

  const fightingEnemyPokemonHp = isSecondEnemy
    ? enemySecondPokemonHp
    : enemyFirstPokemonHp;

  return (
    <div className={classes.display}>
      <div className={classes.enemy_hp}>
        <p>{fightingEnemyPokemon.name}</p>
        <progress
          className={classes.hp_bar}
          id="hp"
          value={fightingEnemyPokemonHp.current}
          max={fightingEnemyPokemonHp.max}
        ></progress>
      </div>
      <div className={classes.user_image}>
        <img
          src={fightingUserPokemon.images.dotted}
          alt={fightingUserPokemon.name}
        />
      </div>
      <div className={classes.user_hp}>
        <p>{fightingUserPokemon.name}</p>
        <progress
          className={classes.hp_bar}
          id="hp"
          value={fightingUserPokemonHp.current}
          max={fightingUserPokemonHp.max}
        ></progress>
      </div>
      <div className={classes.enemy_image}>
        <img
          src={fightingEnemyPokemon.images.dotted}
          alt={fightingEnemyPokemon.name}
        />
      </div>
      <ul className={classes.link_container}>
        <li
          className={classes.link_style}
          onClick={() => {
            setCommand("fight");
          }}
        >
          Fight
        </li>
        <li
          className={classes.link_style}
          onClick={() => {
            setCommand("change");
          }}
        >
          Change
        </li>
        <li
          className={classes.link_style}
          onClick={() => {
            setCommand("item");
          }}
        >
          Item
        </li>
      </ul>
    </div>
  );
};

export default BattleDisplay;
