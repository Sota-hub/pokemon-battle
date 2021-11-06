import TypeIt from "typeit-react";
import classes from "./BattleMessage.module.scss";

const BattleMessage = ({ moveMessage }) => {
  return (
    <div className={classes.message_outer_container}>
      <div className={classes.message_inner_container}>
        <TypeIt
          options={{
            strings: [moveMessage],
            speed: 25,
            waitUntilVisible: true,
          }}
        />
      </div>
    </div>
  );
};

export default BattleMessage;
