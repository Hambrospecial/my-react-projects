import React, { useState, useEffect } from "react";
import styles from "./start.module.css";

export default function Start({ isQuizReady, quizStarted, setQuizStarted }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isQuizReady) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setQuizStarted(false);
    }
  }, [isQuizReady]);

  const handleClick = () => {
    if (isQuizReady && !quizStarted) {
      setQuizStarted(true);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.startButtonContainer}>
      <button
        className={`${styles.startButton} ${
          !isQuizReady || quizStarted ? styles.disabled : ""
        }`}
        onClick={handleClick}
        disabled={quizStarted}
      >
        <span className={styles.buttonText}>Start Quiz</span>
        <span
          className={quizStarted ? styles.buttonIconOn : styles.buttonIconOf}
        >
          🚀
        </span>
      </button>
      {isQuizReady && !quizStarted && (
        <div className={styles.readyMessage}>Quiz is ready to start!</div>
      )}
    </div>
  );
}
