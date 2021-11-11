import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../LandingCards/Card";
import TypeIt from "typeit-react";
import ball from "./pokeball.png";
// import { createContext } from "react";
const Change = () => {
  const [firstPokemonOnScreen, setFirstPokemonOnScreen] = useState(true);
  const [show, setShow] = useState(false);
  const [damage, setDamage] = useState(null);
  const user = useSelector((state) => state.user.user);
  // const userState = createContext();
  // const value = {
  //   firstPokemonOnScreen,
  //   setFirstPokemonOnScreen,
  // };

  const onYesClickHandler = () => {
    setFirstPokemonOnScreen(!firstPokemonOnScreen);
  };

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
            <Switch onClick={onYesClickHandler}>
              <TypeIt>
                Do you want to switch a pokemon? <span>Yes</span>
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
  background-color: rgba(12, 152, 7, 0.9);
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;
const Content = styled.div`
  border: 3px solid blue;
  border-radius: 10px;
  background-color: rgba(16, 188, 242, 0.6);
  margin-left: 3%;
`;
const Switch = styled.div`
  border: 2px solid green;
  padding: 5px;
  padding-right: 10px;
  background-color: white;
  height: 15px;
`;
const Ball = styled.img`
  width: 7%;
  height: 90%;
  position: absolute;
  top: 7%;
  left: -3%;
  z-index: 0;
  filter: grayscale(75%);
`;

const HbBar = styled.div`
  flex-grow: 3;
  text-align: center;
  align-self: center;
  opacity: 0.9;
  z-index: 1;
  padding: 1em 4em 1em 2em;
  clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%);
`;

const Detail = styled(HbBar.withComponent("p"))`
  align-self: flex-end;
`;

const Bar = styled.progress`
  width: 16em;
  height: 0.8em;
  margin-top: 1em;
  background: #00ff00;
  border-radius: 2px;
  border: 2px solid black;
`;
export default Change;
