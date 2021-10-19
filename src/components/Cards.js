import { useState } from "react";
import useSWR from "swr";

// Generate random number
const randomNumber1 = Math.floor(Math.random() * 898);
const randomNumber2 = Math.floor(Math.random() * 898);
const randomNumber3 = Math.floor(Math.random() * 898);

// Fetching function for Promise all
const fetcher = (...urls) => {
  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  return Promise.all(urls.map((url) => getData(url)));
};

const Cards = (props) => {
  // Add style to the selected div
  const [selectedPokemon, setSelectedPokemon] = useState();
  // send the stats for battle
  const [statsData, setData] = useState();

  // fetch with useSWR
  const { data, error } = useSWR(
    [
      `https://pokeapi.co/api/v2/pokemon/${randomNumber1}`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumber2}`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumber3}`,
    ],
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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
      <div id="0" onClick={handleClicked} className={statsData && "chosen"}>
        <img src={data[0].sprites.front_default} alt={data[0].forms[0].name} />
        <p>{data[0].forms[0].name}</p>
      </div>
      <div
        id="1"
        className={selectedPokemon && "chosen"}
        onClick={handleClicked}
      >
        <img src={data[1].sprites.front_default} alt={data[1].forms[0].name} />
        <p>{data[1].forms[0].name}</p>
      </div>
      <div
        id="2"
        className={selectedPokemon && "chosen"}
        onClick={handleClicked}
      >
        <img src={data[2].sprites.front_default} alt={data[2].forms[0].name} />
        <p>{data[2].forms[0].name}</p>
      </div>
      <button onClick={storePokemonData}>Select next Pokemon</button>
    </div>
  );
};

export default Cards;
