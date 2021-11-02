import { useState } from "react";
import styled from "styled-components";

import BattleDisplay from "../components/BattleScreen/BattleDisplay/BattleDisplay";
import BattleHome from "../components/BattleScreen/BattleHome/BattleHome";
import BattleFight from "../components/BattleScreen/BattleFight/BattleFight";
import BattleChange from "../components/BattleScreen/BattleChange/BattleChange";
import BattleItem from "../components/BattleScreen/BattleItem/BattleItem";
import BattleMessage from "../components/BattleScreen/BattleMessage/BattleMessage";

const Battle = () => {
  const [command, setCommand] = useState("home");

  const fightCommand = () => {
    setCommand("fight");
  };

  const changeCommand = () => {
    setCommand("change");
  };

  const itemCommand = () => {
    setCommand("item");
  };

  return (
    <GridContainer>
      <BattleDisplay
        onFight={fightCommand}
        onChange={changeCommand}
        onItem={itemCommand}
      />
      {command === "home" && <BattleHome page="home" />}
      {command === "fight" && <BattleFight />}
      {command === "change" && <BattleChange />}
      {command === "item" && <BattleItem />}
      <BattleMessage />
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
