import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess, getCatsRejected } from "../store/CatSlice";
import axios from "axios";
function* workGetCatsFetch() {
  try {
    const cats = yield call(() =>
      axios.get("https://api.thecatapi.com/v1/breedss")
    );
    const formatedSlicedCats = cats.data.slice(0, 15);
    yield put(getCatsSuccess(formatedSlicedCats));
  } catch (error) {
    console.log(error.message);
    yield put(getCatsRejected(error.message));
  }
}

function* catSaga() {
  yield takeEvery("cats/getCatsPending", workGetCatsFetch);
}

export default catSaga;
