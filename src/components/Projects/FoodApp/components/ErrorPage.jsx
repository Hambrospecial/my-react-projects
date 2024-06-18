import styles from "./errorpage.module.css";
export default function ErrorPage({ errorMessage }) {
  return (
    <div className={styles.errorMessage}>
      <p>{errorMessage}</p>
    </div>
  );
}
