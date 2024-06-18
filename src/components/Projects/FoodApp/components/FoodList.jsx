import FoodItem from "./FoodItem";

export default function FoodList({ setFoodId, foodResults }) {
  return (
    <div>
      {foodResults.map((food) => (
        <div key={food.id}>
          <FoodItem setFoodId={setFoodId} food={food} />
        </div>
      ))}
    </div>
  );
}
