import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import enemySlice from "./enemySlice";

const store = configureStore({
  reducer: { user: userSlice.reducer, enemy: enemySlice.reducer },
});

export default store;
