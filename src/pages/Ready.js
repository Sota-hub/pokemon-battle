import { Fragment } from "react";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { randomNumber } from "../helpers/customFunctions";
import { CountDown } from "../helpers/customFunctions";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin-top: 7%;
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
`;

const Timer = styled(Header.withComponent("div"))`
  font-size: 40px;
  margin-top: 80px;
`;

const Ready = () => {
  const user = useSelector((state) => state.user.user);
  const { data, isError, isLoading } = useFetchPokemon(
    randomNumbers.map((num) => `pokemon/${num}`)
  );
  if (isError) return <First>failed to load</First>;
  if (isLoading) return <First>loading...</First>;

  console.log(data);

  const time = { seconds: 5 };
  console.log(user.firstChoice.id);
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
            <Card dataItem={user.firstChoice} />
            <Card dataItem={user.secondChoice} />
          </Grid>
        </Content>
        <Vs>VS</Vs>
        <Content>
          <Para>AI's Pokemon</Para>
          <Grid>
            {data &&
              data.map((dataItem, idx) => (
                <Card key={idx} dataItem={dataItem} />
              ))}
          </Grid>
        </Content>
      </Wrap>
      <Link to="battle">aaa</Link>
    </Fragment>
  );
};

export default Ready;
