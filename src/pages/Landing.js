import Cards from "../components/Cards";

const Landing = () => {
  const storePokemon = (stats) => {
    console.log(stats);
  };

  return (
    <>
      <h1>Welcome to Pokemon battle</h1>
      <Cards onStorePokemon={storePokemon} />
      <h2>Select your first Pokemon</h2>
    </>
  );
};

export default Landing;
