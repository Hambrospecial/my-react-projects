import { useState } from "react";
import "./FoodApp.css";
import Nav from "./components/Nav";
import FoodList from "./components/FoodList";
import Recipe from "./components/Recipe";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Search from "./components/Search";
import FoodSearchProvider from "./context/FoodSearchProvider";

function FoodApp() {
  const [foodId, setFoodId] = useState(null);

  return (
    <FoodSearchProvider className="App">
      <Nav />
      <Search />
      <Container>
        <InnerContainer>
          <FoodList />
        </InnerContainer>
        <InnerContainer>
          <Recipe />
        </InnerContainer>
      </Container>
    </FoodSearchProvider>
  );
}

export default FoodApp;
