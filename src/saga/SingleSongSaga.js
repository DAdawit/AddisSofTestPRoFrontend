import { call, put, takeEvery } from "redux-saga/effects";
import {
  getSingleSongSuccess,
  getSingleSongRejected,
  getSingleSongPending,
} from "../store/SingleSongSlice";
import axios from "../api";

function* workGetSingleSong({ payload }) {
  // console.log("from api call", payload);
  const _id = payload;
  try {
    const song = yield call(() => axios.get(`songs/${_id}`));
    yield put(getSingleSongSuccess(song.data));
  } catch (error) {
    yield put(getSingleSongRejected(error.message));
  }
}

function* SingleSongSaga() {
  yield takeEvery(getSingleSongPending.type, workGetSingleSong);
}

// export const SingleSongSaga = [fork(SingleSongSaga)];
export default SingleSongSaga;
