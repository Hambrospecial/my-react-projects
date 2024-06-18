import styles from "./fooddetail.module.css";

export default function FoodDetailInstructions({ instructions }) {
  return (
    <div className={styles.instructions}>
      <h2>Instructions:</h2>
      <ul>
        {instructions.map((step) => (
          <li key={step.number} className={styles.step}>
            <span className={styles.stepNumber}>Step {step.number}:</span>{" "}
            {step.step}
          </li>
        ))}
      </ul>
    </div>
  );
}
