import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h3>Portfolio</h3>
          <p>A showcase of my projects and skills.</p>
        </div>
        <div className="footer-right">
          <h3>Connect with me</h3>
          <ul>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Hamid-Ibrahim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
