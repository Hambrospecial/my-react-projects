import { NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="logo">Portfolio</div>
        <nav>
          <ul>
            <NavLink
              to={"/home"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/projects"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <li>Projects</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
