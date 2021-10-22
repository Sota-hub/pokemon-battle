import { Link } from "react-router-dom";
import styled from "styled-components";

const BattleHome = () => {
  return (
    <GridWrapper>
      <Display>aa</Display>
      <Menu>
        <Link to="/battle_fight">Fight</Link>
        <Link to="/battle_change">Change</Link>
        <Link to="/battle_item">Item</Link>
      </Menu>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Display = styled.div`
  grid-column: 2;
  grid-row: 2 / 5;
  background: blue;
`;

const Menu = styled.div`
  grid-column: 1;
  grid-row: 2 / 5;
  background: blue;
`;

export default BattleHome;
