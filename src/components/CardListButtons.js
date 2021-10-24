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

const CardListButtons = ({ choice, setChoice }) => {
  // fetch with useSWR
  const { data, isError, isLoading } = useFetchPokemon(
    randomNumbers.map((num) => `pokemon/${num}`)
  );

  // Alternative returns for Error and Loading state
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // When fetching is Success
  return (
    <CardListContainer onChange={(e) => setChoice(e.target.value)}>
      {data &&
        data.map((dataItem, idx) => (
          <label key={`radio-key-${idx}`}>
            <ChooseInput
              id={`radio-input-${idx}`}
              type="radio"
              name={choice}
              value={JSON.stringify(dataItem)}
            />
            <Card dataItem={dataItem} />
          </label>
        ))}
    </CardListContainer>
  );
};

export default CardListButtons;
