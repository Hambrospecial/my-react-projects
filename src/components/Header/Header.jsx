import { NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">Portfolio</a>
        </div>
        <div className="nav-links">
          <ul>
            <NavLink to={"/home"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/projects"}>
              <li>Projects</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
