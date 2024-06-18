import { useState } from "react";
import styles from "./quizquestion.module.css";
import { decodeHtmlEntities, capitalize, options } from "./Utils";
import Score from "./Score";

export default function QuizQuestion({
  numAttemptedQuestions,
  setNumAttemptedQuestions,
  numCorrectAnswers,
  setCorrectAnswers,
  questionData,
}) {
  const [correct, setCorrect] = useState(false);
  const {
    type,
    difficulty,
    category,
    question,
    correct_answer,
    incorrect_answers,
  } = questionData;

  const allAnswers = [...incorrect_answers];
  const correctIndex = Math.floor(
    Math.random() * (incorrect_answers.length + 1)
  );

  allAnswers.splice(correctIndex, 0, correct_answer);
  const parts = decodeHtmlEntities(category).split(": ");

  function handleClick(e) {
    if (e.target.value === correct_answer) {
      console.log("Correct Answer", e.target.value);
      setCorrect(true);
      setCorrectAnswers(numCorrectAnswers + 1);
    } else {
      setCorrect(false);
    }
    setNumAttemptedQuestions(numAttemptedQuestions + 1);
  }

  return (
    <div className={styles.quizQuestion}>
      <Score
        numAttemptedQuestions={numAttemptedQuestions}
        numCorrectAnswers={numCorrectAnswers}
      />
      <div className={styles.questionHeader}>
        <p className={styles.category}>
          <strong>Category: </strong>
          {parts[0] || ""}
        </p>
        {`${parts[1] || ""}` === "" ? (
          ""
        ) : (
          <p className={styles.subCategory}>
            <strong>Sub-Category: </strong>
            {parts[1] || ""}
          </p>
        )}
        <p className={styles.difficulty}>
          <strong>Difficulty:</strong> {capitalize(difficulty)}
        </p>
      </div>
      <p className={styles.question}>
        <strong>Question: </strong> {decodeHtmlEntities(question)}
      </p>
      <div className={styles.answers}>
        {allAnswers.map((answer, index) => (
          <div
            key={index}
            className={`${styles.answerBtn} ${
              correct && answer === correct_answer ? styles.correctAnswer : ""
            }`}
          >
            <span>{options[index]}.</span>
            <button
              onClick={(e) => handleClick(e)}
              key={index}
              value={decodeHtmlEntities(answer)}
              disabled={correct}
            >
              {decodeHtmlEntities(answer)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
