import { createSlice } from "@reduxjs/toolkit";

const initialEnemyState = {
  isSecondEnemy: false,
  pokemon: [],
};

const enemySlice = createSlice({
  name: "enemySlice",
  initialState: initialEnemyState,
  reducers: {
    createEnemy(state, action) {
      const data = action.payload;
      const newEnemy = {
        name: data[0].name,
        hp: {
          current: data[0].stats[0].base_stat,
          max: data[0].stats[0].base_stat,
        },
        attack: data[0].stats[1].base_stat,
        defence: data[0].stats[2].base_stat,
        speed: data[0].stats[5].base_stat,
        images: {
          animated: data[0].sprites.other["official-artwork"].front_default,
          dotted: data[0].sprites.front_default,
        },
        moves: [...data[1]],
      };
      state.pokemon.push(newEnemy);
    },
    damageEnemyFirstPokemon(state, action) {
      state.pokemon[0].hp.current -= action.payload;
    },
    damageEnemySecondPokemon(state, action) {
      state.pokemon[1].hp.current -= action.payload;
    },
    setIsSecondEnemy(state) {
      state.isSecondEnemy = true;
    },
  },
});

export const enemyActions = enemySlice.actions;

export default enemySlice;
