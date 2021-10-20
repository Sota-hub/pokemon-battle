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

const randomNumber1 = randomNumber();
const randomNumber2 = randomNumber();
const randomNumber3 = randomNumber();

const CardListButtons = ({ choice, setChoice }) => {
  // fetch with useSWR
  const { data, isError, isLoading } = useFetchPokemon([
    `pokemon/${randomNumber1}`,
    `pokemon/${randomNumber2}`,
    `pokemon/${randomNumber3}`,
  ]);

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
