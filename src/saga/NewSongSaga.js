import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../api";
import {
  postNewSongPennding,
  postNewSongSuccess,
  postNewSongRejected,
} from "../store/NewSongSlice";

function* workPostSong({ payload }) {
  console.log(payload);

  try {
    const song = yield call(() => axios.post("songs", payload));
    yield put(postNewSongSuccess(song));
  } catch (error) {
    yield put(postNewSongRejected(error.message));
  }
}

function* NewSongSaga() {
  yield takeEvery(postNewSongPennding.type, workPostSong);
}

export default NewSongSaga;
