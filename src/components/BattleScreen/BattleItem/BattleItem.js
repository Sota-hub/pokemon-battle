import { useState } from "react";
import * as data from "../../../assets/images/items.json";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { userActions } from "../../../store/userSlice";
import { useDispatch } from "react-redux";

const BattleItem = ({ setMessage }) => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState();
  const userFirstPokemonHp = useSelector((state) => state.user.pokemon[0].hp);
  const userSecondPokemonHp = useSelector((state) => state.user.pokemon[1].hp);
  const isSecondPokemon = useSelector((state) => state.user.isSecondPokemon);
  const fightingUserPokemonHp = isSecondPokemon
    ? userSecondPokemonHp
    : userFirstPokemonHp;
  const UseItem = isSecondPokemon
    ? userActions.recoverUserSecondPokemon
    : userActions.recoverUserFirstPokemon;
  const items = Object.keys(data.alive);

  const onClickHandler = () => {
    // setMessage(`pokemon uses ${}`)
    dispatch(UseItem(fightingUserPokemonHp.max * data.alive[order]));
  };

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../../../assets/images", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(order);
  console.log(data.alive[order]);
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Each key={index}>
          <p
            onClick={() => {
              setOrder(item);
            }}
          >
            {item}
          </p>
          <img src={images[`${item}.png`].default} alt={item} />
        </Each>
      ))}
      <span onClick={onClickHandler}>Decide</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-column: 3;
  grid-row: 1 / 11;
  padding: 2em;
  row-gap: 2em;
`;

const Each = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1em ridge rgba(124, 124, 124, 0.6);
  border-radius: 1em;
  background: #fff;
  color: #000;
`;

export default BattleItem;
