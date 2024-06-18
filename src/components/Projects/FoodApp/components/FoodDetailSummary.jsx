import styles from "./fooddetail.module.css";

export default function FoodDetailSummary({ summary }) {
  return (
    <div className={styles.summaryCard}>
      <h2>Summary</h2>
      <div
        className={styles.summaryText}
        dangerouslySetInnerHTML={{ __html: summary }}
      />
    </div>
  );
}
