import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "./movieSlice";
const Movies = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);
  return (
    <div>
      <h1>Movie search app</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={name}
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Movies;
