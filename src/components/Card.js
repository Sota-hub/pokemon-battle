import { useFetchPokemon } from "../hooks/useFetchPokemon";

const Card = ({ handleClicked, statsData, dataItem }) => {
  return (
    <div onClick={handleClicked} className={statsData && "chosen"}>
      <img src={dataItem.sprites.front_default} alt={dataItem.forms[0].name} />
      <p>{dataItem.forms[0].name}</p>
    </div>
  );
};

export default Card;
