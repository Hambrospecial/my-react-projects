import { useState } from "react";
import Categories from "./Categories";
import Levels from "./Levels";
import TimerToggle from "./TimerToggle";
import StartQuiz from "./StartQuiz";
import Start from "./Start";
import QuizBoard from "./QuizBoard";
import { getRandomInt, levels } from "./Utils";
import Nav from "./Nav";
import styles from "./QuizApp.module.css";

function QuizApp() {
  const [quizId, setQuizId] = useState(getRandomInt(10, 32));
  const [level, setLevel] = useState(levels[getRandomInt(0, 2)]);
  const [isTimerEnabled, setIsTimerEnabled] = useState(false);
  const [isQuizReady, setIsQuizReady] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [numAttemptedQuestions, setNumAttemptedQuestions] = useState(0);
  const [numCorrectAnswers, setCorrectAnswers] = useState(0);

  return (
    <div className={styles.quizWrapper}>
      <Nav isQuizReady={isQuizReady}>
        <Categories setQuizId={setQuizId} isQuizReady={isQuizReady} />
        <Levels level={level} setLevel={setLevel} isQuizReady={isQuizReady} />
        <TimerToggle
          isTimerEnabled={isTimerEnabled}
          setIsTimerEnabled={setIsTimerEnabled}
          isQuizReady={isQuizReady}
        />
      </Nav>
      <StartQuiz
        isQuizReady={isQuizReady}
        setIsQuizReady={setIsQuizReady}
        quizStarted={quizStarted}
      />
      <Start
        isQuizReady={isQuizReady}
        quizStarted={quizStarted}
        setQuizStarted={setQuizStarted}
      />
      {quizStarted ? (
        <div>
          <QuizBoard
            numAttemptedQuestions={numAttemptedQuestions}
            setNumAttemptedQuestions={setNumAttemptedQuestions}
            numCorrectAnswers={numCorrectAnswers}
            setCorrectAnswers={setCorrectAnswers}
            quizId={quizId}
            level={level}
            isTimerEnabled={isTimerEnabled}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default QuizApp;
