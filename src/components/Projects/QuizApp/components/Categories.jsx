import styles from "./dropdown.module.css";
import { getRandomInt, categories } from "./Utils";

export default function Categories({ setQuizId, isQuizReady }) {
  const handleChange = (event) => {
    const selectedId = event.target.value
      ? parseInt(event.target.value)
      : getRandomInt(10, 32);
    setQuizId(selectedId);
  };

  return (
    <div className={styles.dropdown}>
      <label htmlFor="quiz-category" className={styles.label}>
        Category:
      </label>
      <select
        id="quiz-category"
        className={styles.select}
        disabled={isQuizReady}
        onChange={handleChange}
      >
        <option value="">Any Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.type}
          </option>
        ))}
      </select>
    </div>
  );
}
