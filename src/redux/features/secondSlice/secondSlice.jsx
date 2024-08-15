import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "i am initialValue of second slice",
};

export const secondSlice = createSlice({
  name: "secondSlice",
  initialState,
  reducers: {
    actionTypeOnesecondSlice: (state, action) => {
        console.log(state);
        console.log(action);
      state.value ;
    },
    actionTypeTwosecondSlice: (state, action) => {
        console.log(state);
        console.log(action);
      state.value ;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionTypeOnesecondSlice, actionTypeTwosecondSlice } =
  secondSlice.actions;

export default secondSlice.reducer;
