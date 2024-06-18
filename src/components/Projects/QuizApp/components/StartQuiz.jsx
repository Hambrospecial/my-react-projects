import styles from "./startquiz.module.css";

export default function StartQuiz({
  isQuizReady,
  setIsQuizReady,
  quizStarted,
}) {
  const handleToggle = (event) => {
    const quizReady = event.target.checked;
    setIsQuizReady(quizReady);
  };

  return (
    <div className={styles.startQuiz}>
      <label htmlFor="start-quiz-checkbox" className={styles.label}>
        <input
          type="checkbox"
          id="start-quiz-checkbox"
          checked={isQuizReady}
          onChange={handleToggle}
          className={styles.checkbox}
          disabled={quizStarted}
        />
        <span className={styles.slider}></span>
        Ready to Start Quiz
      </label>
      {!isQuizReady && (
        <p className={styles.quizInfo}>
          🛠️ Set up your quiz preferences before starting!
        </p>
      )}
      {isQuizReady && (
        <p className={styles.quizInfo}>
          🎉 Great! Click "Start Quiz" when you're ready!
        </p>
      )}
    </div>
  );
}
