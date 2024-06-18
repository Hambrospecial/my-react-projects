import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import CurrencyConverter from "./components/Projects/CurrencyConverter/CurrencyConverter.jsx";
import RandomPasswordGenerator from "./components/Projects/PasswordGenerator/RandomPasswordGenerator.jsx";
import FoodApp from "./components/Projects/FoodApp/FoodApp.jsx";
import TodoApp from "./components/Projects/TodoApp/TodoApp.jsx";
import CounterApp from "./components/Projects/Counter/CounterApp.jsx";
import QuizApp from "./components/Projects/QuizApp/components/QuizApp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route
        path="projects/currency-converter"
        element={<CurrencyConverter />}
      />
      <Route
        path="projects/random-password-generator"
        element={<RandomPasswordGenerator />}
      />
      <Route path="projects/quiz-app" element={<QuizApp />} />
      <Route path="projects/todo-app" element={<TodoApp />} />
      <Route path="projects/food-app" element={<FoodApp />} />
      <Route path="projects/counter" element={<CounterApp />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
