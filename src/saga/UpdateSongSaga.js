import { put, call, takeEvery } from "redux-saga/effects";
import axios from "../api";
import {
  putSongPennding,
  putSongSuccess,
  putSongRejected,
} from "../store/UpdateSongSlice";

function* workPutSong({ payload }) {
  let typeofData = typeof payload;
  console.log(typeofData);
  let id = payload?._id;
  try {
    if (payload._id) {
      const id = payload._id;
      delete payload._id;
      console.log("from object", id);
      const song = yield call(() => axios.put(`songs/${id}`, payload));
      yield put(putSongSuccess(song));
    } else {
      let formDataId = payload.get("_id");
      console.log("from file", formDataId);
      const song = yield call(() => axios.put(`update/${formDataId}`, payload));
      yield put(putSongSuccess(song));
    }
  } catch (error) {
    yield put(putSongRejected(error.message));
  }
}

function* PutSongSaga() {
  yield takeEvery(putSongPennding.type, workPutSong);
}
export default PutSongSaga;
