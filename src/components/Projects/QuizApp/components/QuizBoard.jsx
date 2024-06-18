import { useEffect, useState } from "react";
import QuizQuestion from "./QuizQuestion";
import Next from "./Next";

export default function QuizBoard({
  numAttemptedQuestions,
  setNumAttemptedQuestions,
  numCorrectAnswers,
  setCorrectAnswers,
  quizId,
  level,
  isTimerEnabled,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questionData, setQuestionData] = useState({});
  const [nextTrigger, setNextTrigger] = useState(0);

  useEffect(() => {
    async function getQuiz() {
      setIsLoading(true);
      try {
        const url = `https://opentdb.com/api.php?amount=1&category=${quizId}&difficulty=${level}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setQuestionData(data.results[0]);
      } catch (e) {
        console.error("Failed to fetch Quiz:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getQuiz();
  }, [quizId, level, nextTrigger]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <QuizQuestion
        numAttemptedQuestions={numAttemptedQuestions}
        setNumAttemptedQuestions={setNumAttemptedQuestions}
        numCorrectAnswers={numCorrectAnswers}
        setCorrectAnswers={setCorrectAnswers}
        questionData={questionData}
      />
      <Next setNextTrigger={setNextTrigger} />
    </div>
  );
}
