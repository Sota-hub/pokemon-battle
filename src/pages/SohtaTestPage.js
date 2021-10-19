import { useFetchPokemon } from "../hooks/useFetchPokemon";
const SohtaTestPage = () => {
  const { data, isLoading, isError } = useFetchPokemon(["pokemon/101"]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong!</div>;
  }
  console.log(data);
  return (
    <div>
      <img src={data[0].sprites.other["official-artwork"].front_default} />
      <p>Name: {data[0].name}</p>
      <p>Height:{data[0].height}</p>
      <p>Weight: {data[0].types.weight}</p>
    </div>
  );
};

export default SohtaTestPage;
