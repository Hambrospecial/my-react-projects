import styles from "./timertoggle.module.css";

export default function TimerToggle({
  isTimerEnabled,
  setIsTimerEnabled,
  isQuizReady,
}) {
  const handleToggle = (event) => {
    const timerEnabled = event.target.checked;
    setIsTimerEnabled(timerEnabled);
  };

  return (
    <div className={styles.timerToggle}>
      <label htmlFor="timer-checkbox" className={styles.label}>
        <input
          type="checkbox"
          id="timer-checkbox"
          checked={isTimerEnabled}
          onChange={handleToggle}
          className={styles.checkbox}
          disabled={isQuizReady}
        />
        <span className={styles.slider}></span>
        Enable Question Timer
      </label>
      {isTimerEnabled && (
        <p className={styles.timerInfo}>
          ⏱️ Each question will have a time limit. Answer quickly!
        </p>
      )}
    </div>
  );
}
