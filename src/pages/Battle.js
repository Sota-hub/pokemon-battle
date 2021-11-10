import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { pickRandomFourMoves } from "../helpers/customFunctions";
import styled from "styled-components";

import BattleDisplay from "../components/BattleScreen/BattleDisplay/BattleDisplay";
import BattleHome from "../components/BattleScreen/BattleHome/BattleHome";
import BattleFight from "../components/BattleScreen/BattleFight/BattleFight";
import BattleChange from "../components/BattleScreen/BattleChange/BattleChange";
import BattleItem from "../components/BattleScreen/BattleItem/BattleItem";
import BattleMessage from "../components/BattleScreen/BattleMessage/BattleMessage";

let firstPokemonMoves = null;
let secondPokemonMoves = null;
let firstEnemyMoves = null;
let secondEnemyMoves = null;

const Battle = () => {
  const user = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.enemy);
  const [command, setCommand] = useState("home");
  const [isSecondPokemon /*setIsSecondPokemon*/] = useState(false);
  const [isFirstEnemyDead /*setIsFirstEnemyDead*/] = useState(false);

  // ======== Define pokemon moves here to prevent re-render bug ========
  useEffect(() => {
    firstPokemonMoves = pickRandomFourMoves(user.firstChoice.moves);
    secondPokemonMoves = pickRandomFourMoves(user.secondChoice.moves);
    firstEnemyMoves = pickRandomFourMoves(enemy.firstEnemy.moves);
    secondEnemyMoves = pickRandomFourMoves(enemy.secondEnemy.moves);
  }, [
    user.firstChoice.moves,
    user.secondChoice.moves,
    enemy.firstEnemy.moves,
    enemy.secondEnemy.moves,
  ]);
  // =====================================================================

  // ===== Event is executed at BattleFight.js and the result is reflected at BattleDisplay =====
  let [firstEnemyHp, setFirstEnemyHp] = useState(
    enemy.firstEnemy.stats[0].base_stat
  );
  let [secondEnemyHp, setSecondEnemyHp] = useState(
    enemy.secondEnemy.stats[0].base_stat
  );
  const damageHandler = (damage) => {
    if (!isSecondPokemon) setFirstEnemyHp((firstEnemyHp -= damage));
    if (isSecondPokemon) setSecondEnemyHp((secondEnemyHp -= damage));
  };

  let [firstPokemonHp, setFirstPokemonHp] = useState(
    user.firstChoice.stats[0].base_stat
  );
  let [secondPokemonHp, setSecondPokemonHp] = useState(
    user.secondChoice.stats[0].base_stat
  );
  const damageHandlerE = (damage) => {
    if (!isFirstEnemyDead) setFirstPokemonHp((firstPokemonHp -= damage));
    if (isFirstEnemyDead) setSecondPokemonHp((secondPokemonHp -= damage));
  };
  // =============================================================================================

  // ================================= Update a massage on the basis of a move =================================
  let initialMessage = `AI sent out ${enemy.firstEnemy.forms[0].name}! Go ${user.firstChoice.forms[0].name}!`;
  const [moveMessage, setMoveMessage] = useState(initialMessage);
  const [moveUsed, setMoveUsed] = useState("");
  // ===========================================================================================================

  // === Switch the command bars ===
  const fightCommand = () => {
    setCommand("fight");
  };
  const changeCommand = () => {
    setCommand("change");
  };
  const itemCommand = () => {
    setCommand("item");
  };
  // ================================

  // const togglePokemon = () => {
  //   setIsSecondPokemon(!isSecondPokemon);
  // };

  return (
    <GridContainer>
      <BattleDisplay
        onFight={fightCommand}
        onChange={changeCommand}
        onItem={itemCommand}
        isSecondPokemon={isSecondPokemon}
        isFirstEnemyDead={isFirstEnemyDead}
        firstEnemyHitPoint={firstEnemyHp}
        secondEnemyHitPoint={secondEnemyHp}
        firstPokemonHitPoint={firstPokemonHp}
        secondPokemonHitPoint={secondPokemonHp}
      />
      {command === "home" && <BattleHome page="home" />}
      {command === "fight" && (
        <BattleFight
          isSecondPokemon={isSecondPokemon}
          isFirstEnemyDead={isFirstEnemyDead} // NEW
          firstPokemonMoves={firstPokemonMoves}
          secondPokemonMoves={secondPokemonMoves}
          firstEnemyMoves={firstEnemyMoves}
          secondEnemyMoves={secondEnemyMoves}
          damageHandler={damageHandler}
          damageHandlerE={damageHandlerE}
          setMoveMessage={setMoveMessage}
          setMoveUsed={setMoveUsed}
        />
      )}
      {command === "change" && <BattleChange />}
      {command === "item" && <BattleItem />}
      <BattleMessage moveMessage={moveMessage} moveUsed={moveUsed} />
    </GridContainer>
  );
};

const GridContainer = styled.section`
  height: 100%;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

export default Battle;
