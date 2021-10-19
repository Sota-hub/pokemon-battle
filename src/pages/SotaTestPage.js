import { useFetchPokemon } from "../hooks/useFetchPokemon";

const SotaTestPage = () => {
  const { data, isError, isLoading } = useFetchPokemon(["pokemon/111"]);
  if (isError) return <p>"Error!!!!!!!!!!!!!!!!!!!!"</p>;
  if (isLoading) return <p>"Loading!!!!!!!!!!!!!!!!!!"</p>;

  return (
    <div>
      <img src={data[0].sprites.front_default} alt="Image of pokemon" />
      <p>Name: {data[0].forms[0].name}</p>
      <p>Height: {data[0].height}</p>
      <p>Weight: {data[0].types.weight}</p>
    </div>
  );
};

export default SotaTestPage;
