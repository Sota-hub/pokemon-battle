import { useSelector } from "react-redux";
import classes from "./BattleDisplay.module.scss";

const BattleDisplay = (props) => {
  const user = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.enemy);

  return (
    <div className={classes.display}>
      <div className={classes.enemy_hp}>
        <p>{enemy.firstEnemy.forms[0].name}</p>
        <progress
          className={classes.hp_bar}
          id="hp"
          value="100"
          max="100"
        ></progress>
      </div>
      <div className={classes.user_image}>
        <img
          src={
            user.firstChoice.sprites.back_default

            // versions["generation-v"]["black-white"].animated.back_default
          }
          ait="first choice pokemon"
        />
      </div>
      <div className={classes.user_hp}>
        <p>{user.firstChoice.forms[0].name}</p>
        <progress
          className={classes.hp_bar}
          id="hp"
          value="100"
          max="100"
        ></progress>
      </div>
      <div className={classes.enemy_image}>
        <img
          src={enemy.firstEnemy.sprites.front_default}
          alt="first choice enemy"
        />
      </div>
      <ul className={classes.link_container}>
        <li className={classes.link_style} onClick={props.onFight}>
          Fight
        </li>
        <li className={classes.link_style} onClick={props.onChange}>
          Change
        </li>
        <li className={classes.link_style} onClick={props.onItem}>
          Item
        </li>
      </ul>
    </div>
  );
};

export default BattleDisplay;
