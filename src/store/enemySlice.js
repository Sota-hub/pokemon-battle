import { createSlice } from "@reduxjs/toolkit";

const initialEnemyState = {
  isSecondEnemy: false,
  enemy: {
    firstEnemy: null,
    secondEnemy: null,
  },
  enemyFirstPokemon: {
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
  enemySecondPokemon: {
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
    damageEnemyFirstPokemon(state, action) {
      state.enemyFirstPokemon.hp.current -= action.payload;
    },
    damageEnemySecondPokemon(state, action) {
      state.enemySecondPokemon.hp.current -= action.payload;
    },
  },
});

export const enemyActions = enemySlice.actions;

export default enemySlice;
