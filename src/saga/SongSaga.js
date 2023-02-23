import { call, put, take, takeEvery } from "redux-saga/effects";
import { getSongsSuccess, getSongsRejected } from "../store/SongSlice";
import axios from "../api";
function* workGetSongsFetch() {
  try {
    const songs = yield call(() => axios.get("songs"));
    yield put(getSongsSuccess(songs.data));
  } catch (error) {
    yield put(getSongsRejected(error.message));
  }
}

function* SongSaga() {
  yield takeEvery("songs/getSongsPending", workGetSongsFetch);
}

export default SongSaga;
