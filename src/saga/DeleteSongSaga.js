import { call, put, take, takeEvery } from "redux-saga/effects";
import axios from "../api";
import {
  deleteSongPennding,
  deleteSongSuccess,
  deleteSongRejected,
} from "../store/DeleteSongSlice";

function* workDeleteSong({ payload }) {
  const _id = payload;
  try {
    const song = yield call(() => axios.delete(`songs/${_id}`));
    yield put(deleteSongSuccess(song));
  } catch (error) {
    yield put(deleteSongRejected(error.message));
  }
}

function* DeleteSongSaga() {
  yield takeEvery(deleteSongPennding.type, workDeleteSong);
}

export default DeleteSongSaga;
