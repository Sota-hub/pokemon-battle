import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import useSound from "use-sound";
import battle from "../../sounds/Battle.mp3";

import classes from "./CutIn.module.css";

const CutIn = () => {
  const [play] = useSound(battle);
  const [isLoaded, setIsLoaded] = useState(false);

  const history = useHistory();

  const poke = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.enemy);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);
    setTimeout(() => {
      history.replace("/battle");
    }, 4000);
    setTimeout(() => {
      play();
    }, 3500);
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.vs}>VS</h1>
      <div className={`${classes.enemy} ${isLoaded && classes.appear}`}>
        <p>Enemy</p>
        <div className={classes.enemy_pokemon1}>
          <img
            className={classes.poke_images}
            src={
              enemy.firstEnemy.sprites.other["official-artwork"].front_default
            }
            alt={enemy.firstEnemy.forms[0].name}
          />
        </div>
        <div className={classes.enemy_pokemon2}>
          <img
            className={classes.poke_images}
            src={
              enemy.secondEnemy.sprites.other["official-artwork"].front_default
            }
            alt={enemy.secondEnemy.forms[0].name}
          />
        </div>
      </div>
      <div className={`${classes.you} ${isLoaded && classes.appear}`}>
        <div className={classes.your_pokemon1}>
          <img
            className={classes.poke_images}
            src={
              poke.firstChoice.sprites.other["official-artwork"].front_default
            }
            alt={poke.firstChoice.forms[0].name}
          />
        </div>
        <div className={classes.your_pokemon2}>
          <img
            className={classes.poke_images}
            src={
              poke.secondChoice.sprites.other["official-artwork"].front_default
            }
            alt={poke.secondChoice.forms[0].name}
          />
        </div>
        <p>You</p>
      </div>
    </div>
  );
};

export default CutIn;
