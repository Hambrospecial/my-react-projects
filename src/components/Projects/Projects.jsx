import { NavLink } from "react-router-dom";
import "./projects.css";
export default function Projects() {
  const projects = [
    {
      name: "Currency Converter",
      description:
        "A React app that converts currencies based on real-time exchange rates.",
      image:
        "https://images.unsplash.com/photo-1621378864046-0122e4a415a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "currency-converter",
    },
    {
      name: "Random Password Generator",
      description:
        "A simple React app that generates random, secure passwords.",
      image:
        "https://plus.unsplash.com/premium_photo-1681487746049-c39357159f69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "random-password-generator",
    },
    {
      name: "Quiz App",
      description: "A fun and interactive quiz app built with React.",
      image:
        "https://media.istockphoto.com/id/1486505577/photo/question-mark-on-green-background.jpg?s=1024x1024&w=is&k=20&c=-bVLq8VuS3_CyPmdxQAz_UEKA68SxEQVVM85GxZge6w=",
      link: "quiz-app",
    },
    {
      name: "Todo App",
      description:
        "A todo list app built with React to help you stay organized.",
      image:
        "https://plus.unsplash.com/premium_photo-1683309563562-aa3cfde9ed10?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "todo-app",
    },
    {
      name: "Food App",
      description: "A React app that helps you find and explore new recipes.",
      image:
        "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      link: "food-app",
    },
    {
      name: "Counter",
      description:
        "A simple counter app built with React to demonstrate state management.",
      image:
        "https://plus.unsplash.com/premium_photo-1661964298925-b3ea464fc9b7?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "counter",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-heading">My React Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <NavLink to={`${project.link}`} className="project-link">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
              </div>
              <div className="project-details">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
