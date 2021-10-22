import styled from "styled-components";
import { randomNumber } from "../helpers/customFunctions";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import Card from "./Card";

// Styled components
const CardListContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const ChooseInput = styled.input`
  appearance: none;
`;

const randomNumbers = randomNumber(6);

const singleCard = (dataItem, idx, choice) => (
  <label key={`radio-key-${idx}`}>
    <ChooseInput
      id={`radio-input-${idx}`}
      type="radio"
      name={choice}
      value={JSON.stringify(dataItem)}
    />
    <Card dataItem={dataItem} />
  </label>
);

const CardListButtons = ({ choice, setChoice }) => {
  // fetch with useSWR
  const { data, isError, isLoading } = useFetchPokemon(
    randomNumbers.map((num) => `pokemon/${num}`)
  );

  // Alternative returns for Error and Loading state
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const formerData = data.slice(0, 3);
  const latterData = data.slice(3, 6);

  // When fetching is Success
  return (
    <CardListContainer onChange={(e) => setChoice(e.target.value)}>
      {choice === "firstChoice" &&
        formerData?.map((dataItem, idx) => singleCard(dataItem, idx, choice))}
      {choice === "secondChoice" &&
        latterData?.map((dataItem, idx) => singleCard(dataItem, idx, choice))}
    </CardListContainer>
  );
};

export default CardListButtons;
