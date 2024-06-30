import { useEffect, useState } from "react";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import { useContext } from "react";
import FoodSearchContext from "../context/FoodSearchContext";

export default function SearchResults({ query }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setFoodResults } = useContext(FoodSearchContext);
  useEffect(() => {
    async function searchFoods() {
      try {
        const apiKey = "18088d91aa1f4694b8b942fc9bf9e45a";
        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setFoodResults(data.results);
      } catch (e) {
        console.error("Failed to fetch recipe:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query) {
      searchFoods();
    }
  }, [query]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage errorMessage={`Failed to load foods: ${error}`} />;
  }
}
