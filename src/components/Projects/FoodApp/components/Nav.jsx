import styles from "./nav.module.css";
export default function Nav() {
  return (
    <header>
      <nav className={styles.navbar}>
        <a href="#" className={styles.navbarBrand}>
          <img
            src="https://images.unsplash.com/1/type-away.jpg"
            alt="Food App Icon"
          />
          <span>Food Delight</span>
        </a>
      </nav>
    </header>
  );
}
