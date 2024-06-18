import styles from "./fooddetail.module.css";

export default function FoodDetailIngredients({ ingredients }) {
  return (
    <div className={styles.ingredients}>
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={styles.ingredient}>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              alt={ingredient.name}
              className={styles.ingredientImage}
            />
            <div className={styles.ingredientDetails}>
              <span className={styles.amount}>
                {ingredient.measures.metric.amount}
              </span>
              <span className={styles.unit}>
                {ingredient.measures.metric.unitLong}
              </span>
              <span className={styles.name}>{ingredient.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
