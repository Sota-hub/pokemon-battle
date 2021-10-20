import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../store/userSlice";

const SotaTestPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

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

  return (
    <div>
      <img src={data[0].sprites.front_default} alt="Image of pokemon" />
      <p>Name: {data[0].forms[0].name}</p>
      <p>Height: {data[0].height}</p>
      <p>Weight: {data[0].types.weight}</p>
      <p>{user.userName}</p>
      <p>{user.firstChoice}</p>
      <p>{user.secondChoice}</p>
      <button onClick={userHandler}></button>
    </div>
  );
};

export default SotaTestPage;
