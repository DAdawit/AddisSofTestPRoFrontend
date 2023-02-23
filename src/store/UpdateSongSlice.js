import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  redirect: false,
  error: "",
};

const UpdateSongSlice = createSlice({
  name: "updateSong",
  initialState,
  reducers: {
    resetPutSong: (state) => {
      (state.loading = false), (state.redirect = false), (state.error = "");
    },
    putSongPennding(data) {
      return data;
    },
    putSongSuccess: (state) => {
      (state.loading = false), (state.redirect = true), (state.error = "");
    },
    putSongRejected: (state, action) => {
      state.loading = false;
      (state.redirect = false), (state.error = action.payload);
    },
  },
});

export const {
  putSongPennding,
  putSongSuccess,
  putSongRejected,
  resetPutSong,
} = UpdateSongSlice.actions;
export default UpdateSongSlice.reducer;
