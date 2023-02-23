import { SongHome } from "./components/SongsHome";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SingleSong } from "./components/SingleSong";
import Movies from "./movie/Movies";
import AddSong from "./components/AddSong";
import NavBar from "./components/NavBar/NavBar";
import UpdateSong from "./components/UpdateSong";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<SongHome />} />
          <Route path="/songs/:_id" element={<SingleSong />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/addSong" element={<AddSong />} />
          <Route path="/updateSong/:_id" element={<UpdateSong />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
