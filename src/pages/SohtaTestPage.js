import { useFetchPokemon } from "../hooks/useFetchPokemon";
const SohtaTestPage = () => {
  const { data, isLoading, isError } = useFetchPokemon(["pokemon/101"]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong!</div>;
  }
  return (
    <div>
      <img
        src={data[0].sprites.other["official-artwork"].front_default}
        alt="Image of Pokemon"
      />
      <p>Name: {data[0].name}</p>
      <p>Height:{data[0].height}</p>
      <p>Weight: {data[0].weight}</p>
    </div>
  );
};

export default SohtaTestPage;
