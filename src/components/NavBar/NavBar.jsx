import "../../styles/navbar.css";

import StyledNavBar from "../../StyledComponents/StyledComponents";
import { NavHeading } from "../../StyledComponents/StyledNavBar";
import SongHome from "../SongsHome";
// import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <StyledNavBar>
      <NavHeading href="/">Music</NavHeading>

      <a href="/addSong" className="add-song">
        Add Song
      </a>
    </StyledNavBar>
  );
};

export default NavBar;
