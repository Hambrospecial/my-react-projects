import { NavLink } from "react-router-dom";
import "./home.css";
export default function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Explore my collection of React projects showcasing my skills and
          creativity.
        </p>
        <NavLink to={"/projects"} className="btn">
          View Projects
        </NavLink>
      </div>
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I am a passionate React developer with a focus on building modern,
          responsive, and user-friendly web applications. With a keen eye for
          design and a strong understanding of React principles, I strive to
          create engaging and efficient user experiences.
        </p>
        <NavLink to={"/about"} className="btn">
          Learn More
        </NavLink>
      </div>
    </div>
  );
}
