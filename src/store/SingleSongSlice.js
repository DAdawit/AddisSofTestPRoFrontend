import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
const initialState = {
  loading: false,
  song: {},
  error: "",
};

export const fetchSongDetail = createAsyncThunk(
  "song/fetchSongdetail",
  (id) => {
    return axios.get(`songs/${id}`).then((res) => res.data);
  }
);

const SingleSongSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    getSingleSongPending(id) {
      return id;
    },
    getSingleSongSuccess: (state, action) => {
      (state.loading = false),
        (state.song = action.payload),
        (state.error = "");
    },
    getSingleSongRejected: (state, action) => {
      (state.loading = false),
        (state.song = {}),
        (state.error = action.payload);
    },
  },
});

export const {
  getSingleSongPending,
  getSingleSongSuccess,
  getSingleSongRejected,
} = SingleSongSlice.actions;
export default SingleSongSlice.reducer;
