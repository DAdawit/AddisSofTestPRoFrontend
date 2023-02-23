import axios from "axios";
// export default axios.create({
//   baseURL: `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`,
// });
const endpoint = `http://www.omdbapi.com/?i=tt3896198&apikey=bf3cb118`;

export const fetchMovies = async (movieName) => {
  axios.get(`${endpoint}&=${movieName}`);
};
