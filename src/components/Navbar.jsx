import { NavLink } from "react-router-dom";
import logoMedium from "../assets/logo-medium.png";
import "./NavBar.css";

export function Navbar() {
  // const isActive = true;
  return (
    <nav>
      <img src={logoMedium} alt="Blogventure website logo" />
      <ul className="nav-links-container">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "default-nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "default-nav-link"
            }
          >
            Alle blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-post"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "default-nav-link"
            }
          >
            Nieuwe post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
