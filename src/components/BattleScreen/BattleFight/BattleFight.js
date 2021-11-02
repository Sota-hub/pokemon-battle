import classes from "./BattleFight.module.scss";

const BattleFight = () => {
  return (
    <div className={classes.menu_details}>
      <a href="#" className={classes.button}>
        move1
      </a>
      <a href="#" className={classes.button}>
        move2
      </a>
      <a href="#" className={classes.button}>
        move3
      </a>
      <a href="#" className={classes.button}>
        move4
      </a>
    </div>
  );
};

export default BattleFight;
