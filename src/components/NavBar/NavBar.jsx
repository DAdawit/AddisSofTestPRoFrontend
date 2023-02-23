import "../../styles/navbar.css";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import StyledNavBar from "../../StyledComponents/StyledComponents";
import { NavHeading } from "../../StyledComponents/StyledNavBar";
// import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <StyledNavBar>
      <NavHeading>Music</NavHeading>
      <Link href="/" className="Nav-link">
        Music
      </Link>

      <a href="/addSong" className="add-song">
        <span className="material-icons-outlined">playlist_add</span>
        Add Song
      </a>
      {/* </nav> */}
    </StyledNavBar>
  );
};

export default NavBar;
