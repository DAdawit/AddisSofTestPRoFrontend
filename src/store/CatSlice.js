import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  cats: [],
  error: "",
};

export const CatSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatsPending: (state) => {
      state.loading = true;
    },
    getCatsSuccess: (state, action) => {
      (state.loading = false),
        (state.cats = action.payload),
        (state.error = "");
    },
    getCatsRejected: (state, action) => {
      (state.loading = false),
        (state.cats = []),
        (state.error = action.payload);
      console.log(action.payload);
    },
  },
});

export const { getCatsPending, getCatsSuccess, getCatsRejected } =
  CatSlice.actions;
export default CatSlice.reducer;
