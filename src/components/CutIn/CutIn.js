import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import classes from "./CutIn.module.css";

const CutIn = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.enemy);

  // TEST START
  const firstPoke = useSelector((state) => state.user.userFirstPokemon);
  const secondPoke = useSelector((state) => state.user.userSecondPokemon);
  const firstEne = useSelector((state) => state.enemy.enemyFirstPokemon);
  const secondEne = useSelector((state) => state.enemy.enemySecondPokemon);
  console.log("firstPoke", firstPoke);
  console.log("secondPoke", secondPoke);
  console.log("firstEne", firstEne);
  console.log("secondEne", secondEne);
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
              user.firstChoice.sprites.other["official-artwork"].front_default
            }
            alt={user.firstChoice.forms[0].name}
          />
        </div>
        <div className={classes.your_pokemon2}>
          <img
            className={classes.poke_images}
            src={
              user.secondChoice.sprites.other["official-artwork"].front_default
            }
            alt={user.secondChoice.forms[0].name}
          />
        </div>
        <p>You</p>
      </div>
    </div>
  );
};

export default CutIn;
