import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import classes from "./CutIn.module.css";

const CutIn = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.pokemon);

  // TEST START
  const firstPokemon = useSelector((state) => state.user.pokemon[0]);
  const secondPokemon = useSelector((state) => state.user.pokemon[1]);
  const firstEnemy = useSelector((state) => state.enemy.pokemon[0]);
  const secondEnemy = useSelector((state) => state.enemy.pokemon[1]);
  console.log("firstPoke", firstPokemon);
  console.log("secondPoke", secondPokemon);
  console.log("firstEne", firstEnemy);
  console.log("secondEne", secondEnemy);
  // TEST END

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      history.replace("battle");
    }, 3000);
  }, [history]);

  return (
    <div className={classes.container}>
      <h1 className={classes.vs}>VS</h1>
      <div className={`${classes.enemy} ${isLoaded && classes.appear}`}>
        <p>Enemy</p>
        <div className={classes.enemy_pokemon1}>
          <img
            className={classes.poke_images}
            src={firstEnemy.images.animated}
            alt={firstEnemy.name}
          />
        </div>
        <div className={classes.enemy_pokemon2}>
          <img
            className={classes.poke_images}
            src={secondEnemy.images.animated}
            alt={secondEnemy.name}
          />
        </div>
      </div>
      <div className={`${classes.you} ${isLoaded && classes.appear}`}>
        <div className={classes.your_pokemon1}>
          <img
            className={classes.poke_images}
            src={firstPokemon.images.animated}
            alt={firstPokemon.name}
          />
        </div>
        <div className={classes.your_pokemon2}>
          <img
            className={classes.poke_images}
            src={secondPokemon.images.animated}
            alt={secondPokemon.name}
          />
        </div>
        <p>You</p>
      </div>
    </div>
  );
};

export default CutIn;
