import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  movies: [],
  singleMovie: [],
  error: "",
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { getMovies, setMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
