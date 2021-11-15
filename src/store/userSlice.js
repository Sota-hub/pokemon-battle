import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  isSecondPokemon: false,
  isAnime: false,
  isShow: true,
  user: {
    userName: "",
    firstChoice: null,
    secondChoice: null,
  },
  userFirstPokemon: {
    name: "",
    moves: [],
    hp: {
      current: null,
      max: null,
    },
    attack: null,
    defence: null,
    speed: null,
  },
  userSecondPokemon: {
    name: "",
    moves: [],
    hp: {
      current: null,
      max: null,
    },
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
    damageUserFirstPokemon(state, action) {
      state.userFirstPokemon.hp.current -= action.payload;
    },
    damageUserSecondPokemon(state, action) {
      state.userSecondPokemon.hp.current -= action.payload;
    },
    changeIsSecondPokemon(state, action) {
      state.isSecondPokemon = !state.isSecondPokemon;
    },
    changeIsAnime(state, action) {
      state.isAnime = !state.isAnime;
    },
    changeIsShow(state, action) {
      state.isShow = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
