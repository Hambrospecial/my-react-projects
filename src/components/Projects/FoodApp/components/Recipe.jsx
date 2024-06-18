import { useEffect, useState } from "react";
import FoodDetail from "./FoodDetail";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import EmptyPage from "./EmptyPage";

export default function Recipe({ foodId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      setIsLoading(true);
      setError(null);

      try {
        const apiKey = "18088d91aa1f4694b8b942fc9bf9e45a";
        const url = `https://api.spoonacular.com/recipes/${foodId}/information?includeNutrition=false&apiKey=${apiKey}`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setRecipe(data);
      } catch (e) {
        console.error("Failed to fetch recipe:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (foodId) {
      getRecipe();
    }
  }, [foodId]);

  if (!foodId) {
    return (
      <EmptyPage
        emptyPageMessage={`click any view-recipe botton to get more information`}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!recipe) {
    return <EmptyPage emptyPageMessage={`No recipe found.`} />;
  }

  if (error) {
    return <ErrorPage errorMessage={`Failed to load recipe: ${error}`} />;
  }

  return <FoodDetail recipe={recipe} />;
}
