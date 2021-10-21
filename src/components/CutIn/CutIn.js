import { useSelector } from "react-redux";

import classes from "./CutIn.module.css";

const CutIn = () => {
  const poke = useSelector((state) => state.user.user);

  console.log(poke);
  console.log("aaa");

  return (
    <div className={classes.container}>
      <div className={classes.enemy}>
        <p>Enemy</p>
      </div>
      <div className={classes.you}>
        <p>You</p>
        <p>{poke.firstChoice}</p>
        <p>{poke.secondChoice}</p>
      </div>
    </div>
  );
};

export default CutIn;
