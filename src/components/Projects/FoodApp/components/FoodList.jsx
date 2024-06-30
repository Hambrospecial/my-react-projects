import { useContext } from "react";
import FoodItem from "./FoodItem";
import FoodSearchContext from "../context/FoodSearchContext";

export default function FoodList() {
  const { foodResults } = useContext(FoodSearchContext);
  return (
    <div>
      {foodResults.map((food) => (
        <div key={food.id}>
          <FoodItem food={food} />
        </div>
      ))}
    </div>
  );
}
