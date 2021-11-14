import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import { createContext } from "react";

import BattleDisplay from "../components/BattleScreen/BattleDisplay/BattleDisplay";
import BattleHome from "../components/BattleScreen/BattleHome/BattleHome";
import BattleFight from "../components/BattleScreen/BattleFight/BattleFight";
import BattleChange from "../components/BattleScreen/BattleChange/BattleChange";
import BattleItem from "../components/BattleScreen/BattleItem/BattleItem";
import BattleMessage from "../components/BattleScreen/BattleMessage/BattleMessage";

const Battle = () => {
  const user = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.enemy);
  const initialMessage = `AI sent out ${enemy.firstEnemy.name}! Go ${user.firstChoice.name}!`;
  const [message, setMessage] = useState(initialMessage);
  const [command, setCommand] = useState("home");

  return (
    <GridContainer>
      <BattleDisplay setCommand={setCommand} />
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
