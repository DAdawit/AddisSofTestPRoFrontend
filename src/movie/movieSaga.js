import { takeLatest, put, fork, call } from "redux-saga/effects";
import { fetchMovies } from "./movieApi";
import { getMovies, setMovies } from "./movieSlice";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status == 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLOadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

export const MovieSaga = [fork(onLOadMovies)];
