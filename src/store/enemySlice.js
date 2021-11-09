import { createSlice } from "@reduxjs/toolkit";

const initialEnemyState = {
  enemy: {
    firstEnemy: null,
    secondEnemy: null,
  },
  enemyFirstPokemon: {
    name: "",
    moves: [],
    hp: null,
    attack: null,
    defence: null,
    speed: null,
  },
  enemySecondPokemon: {
    name: "",
    moves: [],
    hp: null,
    attack: null,
    defence: null,
    speed: null,
  },
};

const enemySlice = createSlice({
  name: "enemySlice",
  initialState: initialEnemyState,
  reducers: {
    createEnemy(state, action) {
      state.enemy = action.payload;
    },
    storeEnemyFirstPokemonInfo(state, action) {
      state.enemyFirstPokemon = action.payload;
    },
    storeEnemySecondPokemonInfo(state, action) {
      state.enemySecondPokemon = action.payload;
    },
  },
});

export const enemyActions = enemySlice.actions;

export default enemySlice;
