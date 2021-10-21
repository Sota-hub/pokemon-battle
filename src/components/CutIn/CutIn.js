import classes from "./CutIn.module.css";

const CutIn = () => {
  return (
    <div className={classes.container}>
      <div className={classes.enemy}>
        <p>Enemy</p>
      </div>
      <div className={classes.you}>
        <p>You</p>
      </div>
    </div>
  );
};

export default CutIn;
