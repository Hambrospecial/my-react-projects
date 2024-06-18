import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layout.css";

export default function Layout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
