import styles from "./fooditem.module.css";

export default function FoodItem({ setFoodId, food }) {
  return (
    <div className={styles.foodCard}>
      <img src={food.image} alt="Food App Icon" />
      <div className={styles.cardContent}>
        <p className={styles.title}>{food.title}</p>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.viewRecipeBtn}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
