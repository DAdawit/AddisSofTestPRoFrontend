import "../../styles/navbar.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import StyledNavBar from "../../StyledComponents/StyledComponents";
import { NavHeading } from "../../StyledComponents/StyledNavBar";
import SongHome from "../SongsHome";
// import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <StyledNavBar>
      <NavHeading href="/">Music</NavHeading>
      {/* <Link to="/">Home</Link> */}
      <a href="/">Home</a>

      {/* <Route path="/" component={<SongHome />} /> */}

      {/* <Link to="/" className="Nav-link">
        Music
      </Link> */}

      <a href="/addSong" className="add-song">
        {/* <span className="material-icons-outlined">playlist_add</span> */}
        Add Song
      </a>
      {/* </nav> */}
      <Outlet />
    </StyledNavBar>
  );
};

export default NavBar;
