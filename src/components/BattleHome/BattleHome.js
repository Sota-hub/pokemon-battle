import { NavLink } from "react-router-dom";
import TypeIt from "typeit-react";

import classes from "./BattleHome.module.css";

const navLink = (path, string) => (
  <NavLink
    to={path}
    className={classes.link_style}
    activeClassName={classes.active}
  >
    {string}
  </NavLink>
);

const BattleHome = () => {
  return (
    <section className={classes.grid}>
      <div className={classes.display}>
        <div className={classes.enemy_hp}>Enemy</div>
        <div className={classes.user_hp}>You</div>
        <div className={classes.link_container}>
          {navLink("/battle", "Fight")}
          {navLink("/battle_change", "Change")}
          {navLink("/battle_item", "Item")}
        </div>
      </div>
      <div className={classes.menu_details}></div>
      <div className={classes.message_outer_container}>
        <div className={classes.message_inner_container}>
          <TypeIt
            options={{
              strings: ["AI sent out Picachu! Go Togepi!"],
              speed: 25,
              waitUntilVisible: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BattleHome;
