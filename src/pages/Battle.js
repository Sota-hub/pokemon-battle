import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import BattleDisplay from "../components/BattleScreen/BattleDisplay/BattleDisplay";
import BattleHome from "../components/BattleScreen/BattleHome/BattleHome";
import BattleFight from "../components/BattleScreen/BattleFight/BattleFight";
import BattleChange from "../components/BattleScreen/BattleChange/BattleChange";
import BattleItem from "../components/BattleScreen/BattleItem/BattleItem";
import BattleMessage from "../components/BattleScreen/BattleMessage/BattleMessage";

const Battle = () => {
  const firstPokemonName = useSelector((state) => state.user.pokemon[0].name);
  const firstEnemyName = useSelector((state) => state.enemy.pokemon[0].name);
  const initialMessage = `AI sent out ${firstEnemyName}! Go ${firstPokemonName}!`;
  const [message, setMessage] = useState(initialMessage);
  const [command, setCommand] = useState("home");

  // === Switch the command bars ===
  // TODO: get rid of functions for less code in refactor
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
      />
      {command === "home" && <BattleHome page="home" />}
      {command === "fight" && <BattleFight setMessage={setMessage} />}
      {command === "change" && <BattleChange />}
      {command === "item" && <BattleItem />}
      <BattleMessage message={message} />
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
