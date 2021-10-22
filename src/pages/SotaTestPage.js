import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../store/userSlice";

const SotaTestPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const enemy = useSelector((state) => state.enemy.enemy);

  const { data, isError, isLoading } = useFetchPokemon(["pokemon/111"]);
  if (isError) return <p>"Error!!!!!!!!!!!!!!!!!!!!"</p>;
  if (isLoading) return <p>"Loading!!!!!!!!!!!!!!!!!!"</p>;

  const userHandler = () => {
    dispatch(
      userActions.createUser({
        userName: "sota",
        firstChoice: "pika",
        secondChoice: "Chu",
      })
    );
  };

  console.log(enemy);

  return (
    <div>
      <img src={data[0].sprites.front_default} alt={data[0].name} />
      <p>Name: {data[0].forms[0].name}</p>
      <p>Height: {data[0].height}</p>
      <p>Weight: {data[0].weight}</p>
      <p>{user.userName}</p>
      <p>{user.firstChoice.forms[0].name}</p>
      <p>{user.secondChoice.forms[0].name}</p>
      <button onClick={userHandler}></button>
      <img
        src={enemy.firstEnemy.sprites.other["official-artwork"].front_default}
        alt={enemy.firstEnemy.forms[0].name}
      />
    </div>
  );
};

export default SotaTestPage;
