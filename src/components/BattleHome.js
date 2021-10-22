import { Link } from "react-router-dom";
import TypeIt from "typeit-react";
import styled from "styled-components";

const BattleHome = () => {
  return (
    <GridWrapper>
      <Display>
        <Link to="/battle_fight">Fight</Link>
        <Link to="/battle_change">Change</Link>
        <Link to="/battle_item">Item</Link>
      </Display>
      <Menu></Menu>
      <MessageContainer>
        <MessageBoard>
          <TypeIt
            options={{
              strings: ["AI sent out Picachu! Go Togepi!"],
              speed: 25,
              waitUntilVisible: true,
            }}
          />
        </MessageBoard>
      </MessageContainer>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  background: #000;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

const Display = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 9;
  background: blue;
`;

const Menu = styled.div`
  grid-column: 3;
  grid-row: 1 / 11;
  background: red;
`;

const MessageContainer = styled.div`
  border: solid 5px #24220d;
  border-radius: 0.5em;
  grid-column: 1 / 3;
  grid-row: 9 / 11;
  background: #4f4f4f;
`;

const MessageBoard = styled.div`
  height: 75%;
  border: solid 3px #ebd957;
  border-radius: 0.5em;
  padding: 1em;
  background-clip: content-box;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BattleHome;
