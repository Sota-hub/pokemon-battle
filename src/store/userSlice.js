import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  user: {
    userName: "",
    firstChoice: null,
    secondChoice: null,
  },
  userFirstPokemon: {
    name: "",
    moves: [],
    hp: null,
    attack: null,
    defence: null,
    speed: null,
  },
  userSecondPokemon: {
    name: "",
    moves: [],
    hp: null,
    attack: null,
    defence: null,
    speed: null,
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialUserState,
  reducers: {
    createUser(state, action) {
      state.user = action.payload;
    },
    storeUserFirstPokemonInfo(state, action) {
      state.userFirstPokemon = action.payload;
    },
    storeUserSecondPokemonInfo(state, action) {
      state.userSecondPokemon = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
