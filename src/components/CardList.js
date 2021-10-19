import { useState } from "react";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import Card from "./Card";

// Generate random number
const randomNumber1 = Math.floor(Math.random() * 898);
const randomNumber2 = Math.floor(Math.random() * 898);
const randomNumber3 = Math.floor(Math.random() * 898);

const CardList = (props) => {
  // Add style to the selected div
  const [selectedPokemon, setSelectedPokemon] = useState();
  // send the stats for battle
  const [statsData, setData] = useState();

  // fetch with useSWR
  const { data, isError, isLoading } = useFetchPokemon([
    `pokemon/${randomNumber1}`,
    `pokemon/${randomNumber2}`,
    `pokemon/${randomNumber3}`,
  ]);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // Function for choose Pokemon
  const handleClicked = (e) => {
    setSelectedPokemon(e.currentTarget);
    console.log(e.currentTarget);
    // ======= need to be active ============
    const id = Number(e.target.id);
    setData(data[id]);
    console.log(id);
    console.log(data[id]);
    // ======================================
  };

  // Send the stats of the chosen Pokemon
  const storePokemonData = () => {
    props.onStorePokemon(statsData);
  };

  // When fetching is Success
  return (
    <div>
      {data &&
        data.map((dataItem, idx) => (
          <Card
            key={idx}
            handleClicked={handleClicked}
            statsData={statsData}
            dataItem={dataItem}
          />
        ))}
      <button onClick={storePokemonData}>Select next Pokemon</button>
    </div>
  );
};

export default CardList;
