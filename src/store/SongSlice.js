import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api";

const initialState = {
  loading: false,
  songs: [],
  error: "",
};

export const SongSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsPending: (state, payload) => {
      state.loading = true;
    },
    getSongsSuccess: (state, action) => {
      (state.loading = false),
        (state.songs = action.payload),
        (state.error = "");
    },
    getSongsRejected: (state, action) => {
      (state.loading = false),
        (state.songs = []),
        (state.error = action.payload);
    },
  },
});

export const { getSongsPending, getSongsSuccess, getSongsRejected } =
  SongSlice.actions;
export default SongSlice.reducer;
