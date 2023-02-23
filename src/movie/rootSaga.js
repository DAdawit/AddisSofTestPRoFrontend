import { all } from "redux-saga/effects";

import { MovieSaga } from "./movieSaga";
// import { SingleSongSaga } from "../saga/SingleSongSaga";

export default function* rootSaga() {
  yield all([...MovieSaga]);
}
