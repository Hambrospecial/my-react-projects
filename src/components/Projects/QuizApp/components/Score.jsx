import styles from "./score.module.css";

export default function Score({ numAttemptedQuestions, numCorrectAnswers }) {
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.scoreItem}>
        <span className={styles.scoreLabel}>Attempted Questions:</span>
        <span className={styles.scoreValue}>{numAttemptedQuestions}</span>
      </div>
      <div className={styles.scoreItem}>
        <span className={styles.scoreLabel}>Correct Answers:</span>
        <span className={styles.scoreValue}>{numCorrectAnswers}</span>
      </div>
    </div>
  );
}
