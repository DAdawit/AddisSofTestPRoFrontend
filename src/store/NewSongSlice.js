import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  song: {},
  error: false,
  redirect: false,
};

const NewSongSlice = createSlice({
  name: "newSong",
  initialState,
  reducers: {
    resetAddSongState: (state) => {
      (state.loading = false),
        (state.song = {}),
        (state.error = ""),
        (state.redirect = false);
    },
    postNewSongPennding(data) {
      return data;
    },
    postNewSongSuccess: (state, action) => {
      (state.loading = false), (state.song = action.payload);
      (state.error = ""), (state.redirect = true);
    },
    postNewSongRejected: (state, aciton) => {
      (state.loading = false),
        (state.song = {}),
        (state.redirect = false((state.error = aciton.payload)));
    },
  },
});

export const { postNewSongPennding, postNewSongSuccess, postNewSongRejected } =
  NewSongSlice.actions;
export default NewSongSlice.reducer;
