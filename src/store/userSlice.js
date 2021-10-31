import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  user: {
    userName: "",
    firstChoice: null,
    secondChoice: null,
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialUserState,
  reducers: {
    createUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
