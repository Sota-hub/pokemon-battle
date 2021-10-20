import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  user: { userName: "", firstChoice: "", secondChoice: "" },
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

// userSlice...<-- reducer

// [When "Pokemon select" button is clicked]
// const storeHandler = () => {
//   dispatch(userActions.getUser);
// }
