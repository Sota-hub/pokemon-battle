import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./BattleDisplay.module.scss";

const navLink = (path, string) => (
  <NavLink
    to={path}
    className={classes.link_style}
    activeClassName={classes.active}
  >
    {string}
  </NavLink>
);

const BattleDisplay = () => {
  const user = useSelector((state) => state.user.user);

  console.log(user.firstChoice);

  return (
    <div className={classes.display}>
      <div className={classes.enemy_hp}>
        <p>{user.firstChoice.forms[0].name}</p>
        <progress
          className={classes.hp_bar}
          id="hp"
          value="100"
          max="100"
        ></progress>
      </div>
      <div className={classes.user_image}>
        <img src={user.firstChoice.sprites.back_default} />
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
        <img src={user.firstChoice.sprites.front_default} />
      </div>
      <div className={classes.link_container}>
        {navLink("/battle", "Fight")}
        {navLink("/battle_change", "Change")}
        {navLink("/battle_item", "Item")}
      </div>
    </div>
  );
};

export default BattleDisplay;
