import { Fragment } from "react";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import Card from "../components/Card";
import styled from "styled-components";

const random1 = Math.floor(Math.random() * 898);
const random2 = Math.floor(Math.random() * 898);
const Ready = () => {
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
    margin-top: 10%;
  `;

  const Content = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    margin-top: 50px;
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

  const { data, isError, isLoading } = useFetchPokemon([
    `pokemon/${random1}`,
    `pokemon/${random2}`,
  ]);
  if (isError) return <First>failed to load</First>;
  if (isLoading) return <First>loading...</First>;

  return (
    <Fragment>
      <Header>Chose Your Pokemon</Header>
      <Wrap>
        <Content>
          <Para>Your Pokemon</Para>
          <Grid>
            {data &&
              data.map((dataItem, idx) => (
                <Card key={idx} dataItem={dataItem} />
              ))}
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
    </Fragment>
  );
};

export default Ready;
