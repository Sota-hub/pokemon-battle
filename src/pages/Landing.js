import CardList from "../components/CardList";

const Landing = () => {
  const storePokemon = (stats) => {
    console.log(stats);
  };

  return (
    <>
      <h1>Welcome to Pokemon battle</h1>
      <CardList onStorePokemon={storePokemon} />
      <h2>Select your first Pokemon</h2>
    </>
  );
};

export default Landing;
