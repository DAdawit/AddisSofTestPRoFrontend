import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  redirect: false,
  error: "",
};

const DeleteSongSlice = createSlice({
  name: "deletesong",
  initialState,
  reducers: {
    resetDeleteSongState: (state) => {
      state.loading = false;
      state.redirect = false;
      state.error = "";
    },
    deleteSongPennding(id) {
      return id;
    },
    deleteSongSuccess: (state) => {
      (state.loading = false), (state.error = ""), (state.redirect = true);
    },
    deleteSongRejected: (state, action) => {
      (state.loading = false),
        (state.error = action.payload),
        (state.redirect = false);
    },
  },
});

export const {
  deleteSongPennding,
  deleteSongSuccess,
  deleteSongRejected,
  resetDeleteSongState,
} = DeleteSongSlice.actions;
export default DeleteSongSlice.reducer;
