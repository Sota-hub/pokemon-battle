import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../LandingCards/Card";
import TypeIt from "typeit-react";
import ball from "./pokeball.png";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/userSlice";
import change from "../../../sounds/change.mp3";
import useSound from "use-sound";

const BattleChange = () => {
  const [play] = useSound(change);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const userPokemon = useSelector((state) => state.user.pokemon);
  const isSecondPokemon = useSelector((state) => state.user.isSecondPokemon);
  const isAnime = useSelector((state) => state.user.isAnime);
  const userFirstPokemonHp = useSelector((state) => state.user.pokemon[0].hp);
  const userSecondPokemonHp = useSelector((state) => state.user.pokemon[1].hp);
  const fightingUserPokemonHp = !isSecondPokemon
    ? userSecondPokemonHp
    : userFirstPokemonHp;

  const onClickHandler = () => {
    setTimeout(() => {
      dispatch(userActions.toggleIsSecondPokemon());
      dispatch(userActions.changeIsAnime());
    }, 750);
    dispatch(userActions.changeIsShow());
    dispatch(userActions.changeIsDelay());
    play();
  };

  setTimeout(() => {
    if (isAnime) {
      dispatch(userActions.changeIsAnime());
      dispatch(userActions.changeIsDelay());
    }
  }, 500);

  return (
    <BackGround>
      <Content>
        <Wrapper>
          <Ball src={ball} alt="pokemon ball" />
          <div
            onClick={() => {
              setShow(!show);
              play();
            }}
          >
            {isSecondPokemon && (
              <Card
                imageSrc={userPokemon[0].images.animated}
                pokemonName={userPokemon[0].name}
              />
            )}
            {!isSecondPokemon && (
              <Card
                imageSrc={userPokemon[1].images.animated}
                pokemonName={userPokemon[1].name}
              />
            )}
          </div>
          {show && (
            <Switch onClick={onClickHandler}>
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
              value={fightingUserPokemonHp.current}
              max={fightingUserPokemonHp.max}
            />
            <Detail>
              {fightingUserPokemonHp.current}/{fightingUserPokemonHp.max}
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
