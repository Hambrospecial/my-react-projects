import styles from "./emptypage.module.css";
export default function EmptyPage({ emptyPageMessage }) {
  return (
    <div className={styles.noRecipe}>
      <p>{emptyPageMessage}</p>
    </div>
  );
}
