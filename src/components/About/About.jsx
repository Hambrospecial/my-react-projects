import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="profile-section">
          <div className="profile-image">
            <img
              src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
            />
          </div>
          <div className="profile-details">
            <h1 className="name">Hamid Ibrahim</h1>
            <p className="role">Software Engineer</p>
            <div className="contact-about-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a
                  href="mailto:hamid.okanlawon28@gmail.com"
                  className="contact-link"
                >
                  hamid.okanlawon28@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span className="contact-link">+2348081476273</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <a
                  href="https://linkedin.com/in/hamid-ib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/hamid-ib
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <h2 className="section-heading">About Me</h2>
          <p>
            Accomplished Software Engineer with 4+ years of experience in
            designing, developing, and deploying innovative solutions for
            fintech and financial services industries. Proficient in Java,
            Spring Boot, microservices architecture, SQL databases, and agile
            methodologies. Demonstrated ability to collaborate with
            cross-functional teams, analyze complex requirements, and deliver
            high-quality software solutions that optimize processes and drive
            business success.
          </p>
          <h2 className="section-heading">Key Projects</h2>
          <div className="about-project-card">
            <h3 className="about-project-name">SmartTrade</h3>
            <p className="about-project-description">
              A trade solution that automates banking trade processes and
              improves efficiency by 40%. Collaborated with a team of 15 members
              to build and deploy this solution using microservices for 3 major
              Banks, including First Bank of Nigeria and United Bank for Africa
              (UBA). Integrated solutions with Banks' environments, ensuring
              seamless compatibility and domain suitability.
            </p>
            <p className="tech-stack">
              <strong>Technologies:</strong> Java, Spring Boot, React,
              JavaScript, Microservices, Jenkins, MSSQL, Postgres, Oracle
              WebLogic, OHS, Nginx, Sonarqube, Redis, Jira, Docker, Bitbucket.
            </p>
          </div>
          <h2 className="section-heading">Technical Skills</h2>
          <div className="skills-container">
            <div className="skill-group">
              <h4 className="skill-group-heading">Programming Languages</h4>
              <ul className="skill-list">
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            <div className="skill-group">
              <h4 className="skill-group-heading">Frameworks & Libraries</h4>
              <ul className="skill-list">
                <li>Spring Boot</li>
                <li>Spring MVC</li>
                <li>React</li>
                <li>ThymeLeaf</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
              </ul>
            </div>

            <div className="skill-group">
              <h4 className="skill-group-heading">Databases</h4>
              <ul className="skill-list">
                <li>SQL (MSSQL, Oracle, Postgres)</li>
                <li>NoSQL (MongoDB)</li>
              </ul>
            </div>

            <div className="skill-group">
              <h4 className="skill-group-heading">Tools & Technologies</h4>
              <ul className="skill-list">
                <li>ESQL</li>
                <li>IBM App Connect Enterprise</li>
                <li>Microservices</li>
                <li>Docker</li>
                <li>Swagger</li>
                <li>Postman</li>
                <li>Jira</li>
                <li>GitHub</li>
                <li>GitLab</li>
                <li>Jenkins</li>
                <li>Sonarqube</li>
                <li>Redis</li>
              </ul>
            </div>

            <div className="skill-group">
              <h4 className="skill-group-heading">Methodologies</h4>
              <ul className="skill-list">
                <li>Agile</li>
                <li>SOLID Principles</li>
                <li>OOP</li>
                <li>Lean Six Sigma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
