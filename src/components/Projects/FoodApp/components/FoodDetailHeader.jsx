import styles from "./fooddetail.module.css";

export default function FoodDetailHeader({ recipe }) {
  return (
    <div className={styles.foodHeader}>
      <img src={recipe.image} alt={recipe.title} className={styles.foodImage} />
      <div className="food-tags">
        <span
          className={`${styles.tag} ${
            recipe.vegan ? styles.vegan : styles.nonVegan
          }`}
        >
          {recipe.vegan ? "Vegan" : "Non-Vegan"}
        </span>
        <span
          className={`${styles.tag} ${
            recipe.vegetarian ? styles.vegetarian : styles.nonVegetarian
          }`}
        >
          {recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
        </span>
      </div>
    </div>
  );
}
