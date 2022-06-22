import React from "react";
import logo from "../../logo-one.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MouseIcon from '@mui/icons-material/Mouse';
//import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function Navbar() {
  return (
    <nav className="appNavBar">
      <ul>
        <img className="logo" src={logo} alt="NewSoft" />
        <li>
          <Link className="link" to="/">
            <HomeIcon className="iconsStyle" />
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/products">
            <MouseIcon className="iconsStyle" />
            Productos
          </Link>
        </li>
        <li>
          <Link className="link" to="/">
            <PersonIcon className="iconsStyle" />
            Usuarios
          </Link>
        </li>
        {/* <li>
          <Link className="link" to="/">
            <TextSnippetIcon className="iconsStyle" />
            Home
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
