import styled from "styled-components";

import BattleDisplay from "../../components/BattleScreen/BattleDisplay/BattleDisplay";
import BattleMenu from "../../components/BattleScreen/BattleMenu/BattleMenu";
import BattleMessage from "../../components/BattleScreen/BattleMessage/BattleMessage";

const BattleHome = () => {
  return (
    <GridContainer>
      <BattleDisplay />
      <BattleMenu page="home" />
      <BattleMessage />
    </GridContainer>
  );
};

const GridContainer = styled.section`
  height: 100%;
  background: #000;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

export default BattleHome;
