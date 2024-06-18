import styles from "./dropdown.module.css";
import { getRandomInt, levels, capitalize } from "./Utils";

export default function Levels({ level, setLevel, isQuizReady }) {
  const handleChange = (event) => {
    const val = event.target.value || levels[getRandomInt(0, 2)];
    setLevel(val);
  };

  return (
    <div className={styles.dropdown}>
      <label htmlFor="quiz-category" className={styles.label}>
        Level:
      </label>
      <select
        id="quiz-category"
        value={level}
        onChange={handleChange}
        className={styles.select}
        disabled={isQuizReady}
      >
        <option value="">Any Difficulty</option>
        {levels.map((item, index) => (
          <option key={index} value={item}>
            {capitalize(item)}
          </option>
        ))}
      </select>
    </div>
  );
}
