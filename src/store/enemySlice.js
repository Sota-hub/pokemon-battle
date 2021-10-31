import { createSlice } from "@reduxjs/toolkit";

const initialEnemyState = {
  enemy: {
    firstEnemy: null,
    secondEnemy: null,
  },
};

const enemySlice = createSlice({
  name: "enemySlice",
  initialState: initialEnemyState,
  reducers: {
    createEnemy(state, action) {
      state.enemy = action.payload;
    },
  },
});

export const enemyActions = enemySlice.actions;

export default enemySlice;
