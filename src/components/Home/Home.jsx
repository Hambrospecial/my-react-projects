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
          I am an accomplished Software Engineer with over 4 years of experience
          in the fintech and financial services sectors. Proficient in Java,
          Spring Boot, microservices, SQL, and Agile methodologies, I specialize
          in designing, developing, and deploying innovative solutions that
          drive business success. My key achievements include developing
          SmartTrade, a trade automation solution used by major banks, achieving
          a 40% efficiency improvement, and reducing customer complaints by 25%
          through effective ESB integration. As a passionate React developer, I
          focus on building modern, responsive, and user-friendly web
          applications, combining a keen eye for design with a strong
          understanding of React principles to create engaging and efficient
          user experiences.
        </p>
        <NavLink to={"/about"} className="btn">
          Learn More
        </NavLink>
      </div>
    </div>
  );
}
