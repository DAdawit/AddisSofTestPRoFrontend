import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import SongSlice from "./SongSlice";
import SongSaga from "../saga/SongSaga";
import SingleSongSlice from "./SingleSongSlice";
import SingleSongSaga from "../saga/SingleSongSaga";
import movieSlice from "../movie/movieSlice";
// import { MovieSaga } from "../movie/movieSaga";
import rootSaga from "../movie/rootSaga";
import NewSongSaga from "../saga/NewSongSaga";
import NewSongSlice from "./NewSongSlice";
import DeleteSongSaga from "../saga/deleteSongSaga";
import DeleteSongSlice from "./DeleteSongSlice";
import UpdateSongSlice from "./UpdateSongSlice";
import UpdateSongSaga from "../saga/UpdateSongSaga";
const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    songs: SongSlice,
    song: SingleSongSlice,
    movies: movieSlice,
    newSong: NewSongSlice,
    deletesong: DeleteSongSlice,
    updateSong: UpdateSongSlice,
  },
  middleware: [saga],
});

saga.run(SongSaga);
saga.run(rootSaga);
saga.run(NewSongSaga);
saga.run(SingleSongSaga);
saga.run(DeleteSongSaga);
saga.run(UpdateSongSaga);
export default store;
