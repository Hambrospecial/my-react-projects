import { useState } from "react";
import FoodSearchContext from "./FoodSearchContext";

const FoodSearchProvider = ({ children }) => {
  const [foodResults, setFoodResults] = useState([]);
  const [foodId, setFoodId] = useState();

  return (
    <FoodSearchContext.Provider
      value={{ foodResults, setFoodResults, foodId, setFoodId }}
    >
      {children}
    </FoodSearchContext.Provider>
  );
};

export default FoodSearchProvider;
