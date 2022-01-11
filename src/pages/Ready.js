import { Fragment } from "react";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { randomNumber } from "../helpers/customFunctions";
import { CountDown } from "../helpers/customFunctions";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/LandingCards/Card";
import styled from "styled-components";
import { enemyActions } from "../store/enemySlice";
import { getPokemonMovesInfo } from "../helpers/customFunctions";

const randomNumbers = randomNumber(2);

const First = styled.h2`
  text-align: center;
  margin-top: 25%;
  color: red;
  font-size: 40px;
`;

const Header = styled.h1`
  text-align: center;
`;

const Wrap = styled.div`
  margin-top: -45%;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-top: 40px;
  height: 40%;
`;
const Grid = styled.div`
  width: 50%;
  position: absolute;
  right: 30px;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-start: 3;
  grid-column-end: 4;
  gap: 10px;
`;

const Para = styled.p`
  display: flex;
  text-align: center;
  height: 144px;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const Vs = styled.h2`
  text-align: center;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-top: -6%;
`;

const Timer = styled(Header.withComponent("div"))`
  font-size: 40px;
  margin-top: 80px;
`;

const Ready = () => {
  const dispatch = useDispatch();
  const userPokemon = useSelector((state) => state.user.pokemon);
  const { data, isError, isLoading } = useFetchPokemon(
    randomNumbers.map((num) => `pokemon/${num}`)
  );
  if (isError) return <First>failed to load</First>;
  if (isLoading) return <First>loading...</First>;

  const waitMovesInfo = async () => {
    const firstEnemy = data[0];
    const secondEnemy = data[1];
    const firstMoves = await getPokemonMovesInfo(firstEnemy.moves);
    const secondMoves = await getPokemonMovesInfo(secondEnemy.moves);

    dispatch(enemyActions.createEnemy([firstEnemy, firstMoves]));
    dispatch(enemyActions.createEnemy([secondEnemy, secondMoves]));
  };
  waitMovesInfo();

  const time = { seconds: 3 };
  return (
    <Fragment>
      <Header>Battle start in ...</Header>
      <Timer>
        <CountDown time={time} />
      </Timer>
      <Wrap>
        <Content>
          <Para>Your Pokemon</Para>
          <Grid>
            <Card
              pokemonName={userPokemon[0].name}
              imageSrc={userPokemon[0].images.animated}
            />
            <Card
              pokemonName={userPokemon[1].name}
              imageSrc={userPokemon[1].images.animated}
            />
          </Grid>
        </Content>
        <Vs>VS</Vs>
        <Content>
          <Para>AI's Pokemon</Para>
          <Grid>
            {data &&
              data.map((dataItem, idx) => (
                <Card
                  key={`ready-${idx}`}
                  pokemonName={dataItem.name}
                  imageSrc={
                    dataItem.sprites.other["official-artwork"].front_default
                  }
                />
              ))}
          </Grid>
        </Content>
      </Wrap>
    </Fragment>
  );
};

export default Ready;
