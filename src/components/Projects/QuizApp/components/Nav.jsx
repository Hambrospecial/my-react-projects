import styles from "./nav.module.css";
export default function Nav({ isQuizReady, children }) {
  return (
    <div className={isQuizReady ? styles.overlay : ""}>
      <div className={styles.navbar}>{children}</div>
    </div>
  );
}
