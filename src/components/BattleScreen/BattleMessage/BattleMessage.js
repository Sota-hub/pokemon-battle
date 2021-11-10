import TypeIt from "typeit-react";
import classes from "./BattleMessage.module.scss";

const BattleMessage = ({ message }) => {
  return (
    <div className={classes.message_outer_container}>
      <div className={classes.message_inner_container}>
        <TypeIt
          key={message}
          options={{
            strings: [message],
            speed: 25,
            waitUntilVisible: true,
          }}
        />
      </div>
    </div>
  );
};

export default BattleMessage;
