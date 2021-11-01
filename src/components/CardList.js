import styled from "styled-components";
import { randomNumber } from "../helpers/customFunctions";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import Card from "./Card";

const CardListContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

// Generate random number
const randomNumber1 = randomNumber();
const randomNumber2 = randomNumber();
const randomNumber3 = randomNumber();

const CardList = () => {
  // fetch with useSWR
  const { data, isError, isLoading } = useFetchPokemon([
    `pokemon/${randomNumber1}`,
    `pokemon/${randomNumber2}`,
    `pokemon/${randomNumber3}`,
  ]);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // When fetching is Success
  return (
    <CardListContainer>
      {data &&
        data.map((dataItem, idx) => <Card key={idx} dataItem={dataItem} />)}
    </CardListContainer>
  );
};

export default CardList;
