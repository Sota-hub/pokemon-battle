import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../LandingCards/Card";
import TypeIt from "typeit-react";
import ball from "./pokeball.png";
// import { createContext } from "react";
const BattleChange = () => {
  const [firstPokemonOnScreen, setFirstPokemonOnScreen] = useState(true);
  const [show, setShow] = useState(false);
  const [damage, setDamage] = useState(null);
  const user = useSelector((state) => state.user.user);
  // const span = document.querySelector("span");

  // span.addEventListener("click", () => {
  //   setFirstPokemonOnScreen(!firstPokemonOnScreen);
  // });

  return (
    <BackGround>
      <Content>
        <Wrapper>
          <Ball src={ball} alt="pokemon ball" />
          <div
            onClick={() => {
              setShow(!show);
            }}
          >
            {!firstPokemonOnScreen && (
              <Card
                dataItem={user.firstChoice}
                key={user.firstChoice.forms[0].name}
              />
            )}
            {firstPokemonOnScreen && (
              <Card
                dataItem={user.secondChoice}
                key={user.secondChoice.forms[0].name}
              />
            )}
          </div>
          {show && (
            <Switch>
              <TypeIt>
                Do you want to switch a pokemon? <span> Yes</span>
                <span> No</span>
              </TypeIt>
            </Switch>
          )}
          <Detail>Lv. 50</Detail>
          <HbBar>
            <Bar
              id="hp"
              value={damage}
              max={
                !firstPokemonOnScreen
                  ? user.secondChoice.stats[0].base_stat
                  : user.firstChoice.stats[0].base_stat
              }
            />
            <Detail>
              {damage}/
              {!firstPokemonOnScreen
                ? user.secondChoice.stats[0].base_stat
                : user.firstChoice.stats[0].base_stat}
            </Detail>
          </HbBar>
        </Wrapper>
      </Content>
    </BackGround>
  );
};

const BackGround = styled.div`
  grid-row: 1 / 11;
  padding: 2em;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;
const Content = styled.div`
  border: 3px solid blue;
  border-radius: 10px;
`;
const Switch = styled.div`
  position: absolute;
  top: 120%;
  border: 2px solid green;
  border-radius: 1em;
  padding: 5px;
  padding-right: 10px;
  line-height: 3em;
`;
const Ball = styled.img`
  width: 13%;
  height: 60%;
  position: absolute;
  top: 17%;
  left: -8%;
  filter: grayscale(75%);
`;

const HbBar = styled.div`
  text-align: center;
  align-self: center;
  opacity: 0.9;
  padding: 1em 1em 1em 0em;
  clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%);
  margin-right: 1em;
`;

const Detail = styled(HbBar.withComponent("p"))`
  align-self: flex-end;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Bar = styled.progress`
  width: 9em;
  height: 0.8em;
  margin-top: 1em;
  margin-bottom: 1em;
  background: #00ff00;
  border-radius: 2px;
  border: 2px solid black;
`;
export default BattleChange;
