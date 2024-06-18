import { useEffect, useState } from "react";
import styles from "./next.module.css";

export default function Next({ setNextTrigger }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleNextQuestion = () => {
    setNextTrigger((prev) => prev + 1);
  };

  return (
    <div>
      {showButton && (
        <button className={styles.nextButton} onClick={handleNextQuestion}>
          Next
        </button>
      )}
    </div>
  );
}
