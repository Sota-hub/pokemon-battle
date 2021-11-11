import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  isSecondPokemon: false,
  pokemon: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialUserState,
  reducers: {
    createUser(state, action) {
      const data = action.payload;
      const newPokemon = {
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
          dotted: data[0].sprites.back_default,
        },
        moves: [...data[1]],
      };
      state.pokemon.push(newPokemon);
    },
    damageUserFirstPokemon(state, action) {
      state.pokemon[0].hp.current -= action.payload;
    },
    damageUserSecondPokemon(state, action) {
      state.pokemon[1].hp.current -= action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
