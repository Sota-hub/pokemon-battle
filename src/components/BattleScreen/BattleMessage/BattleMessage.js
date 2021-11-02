import { useSelector } from "react-redux";
import TypeIt from "typeit-react";
import classes from "./BattleMessage.module.scss";

const BattleMessage = () => {
  const user = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.enemy);

  return (
    <div className={classes.message_outer_container}>
      <div className={classes.message_inner_container}>
        <TypeIt
          options={{
            strings: [
              `AI sent out ${enemy.firstEnemy.forms[0].name}! Go ${user.firstChoice.forms[0].name}!`,
            ],
            speed: 25,
            waitUntilVisible: true,
          }}
        />
      </div>
    </div>
  );
};

export default BattleMessage;
