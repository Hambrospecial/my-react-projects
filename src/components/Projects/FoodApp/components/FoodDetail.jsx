import FoodDetailEquipment from "./FoodDetailEquipments";
import FoodDetailHeader from "./FoodDetailHeader";
import FoodDetailIngredients from "./FoodDetailIngredients";
import FoodDetailInstructions from "./FoodDetailInstructions";
import FoodDetailSummary from "./FoodDetailSummary";
import styles from "./fooddetail.module.css";

export default function FoodDetail({ recipe }) {
  return (
    <div className={styles.foodDetail}>
      <FoodDetailHeader recipe={recipe} />
      <FoodDetailSummary summary={recipe.summary} />
      <FoodDetailInstructions
        instructions={recipe.analyzedInstructions[0].steps}
      />
      <FoodDetailIngredients ingredients={recipe.extendedIngredients} />
      <FoodDetailEquipment equipments={recipe.analyzedInstructions[0].steps} />
    </div>
  );
}
