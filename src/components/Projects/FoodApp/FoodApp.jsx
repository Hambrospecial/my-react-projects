import { useState } from "react";
import "./FoodApp.css";
import Nav from "./components/Nav";
import FoodList from "./components/FoodList";
import Recipe from "./components/Recipe";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Search from "./components/Search";

function FoodApp() {
  const [foodResults, setFoodResults] = useState([]);
  const [foodId, setFoodId] = useState(null);

  return (
    <div className="App">
      <Nav />
      <Search setFoodResults={setFoodResults} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodResults={foodResults} />
        </InnerContainer>
        <InnerContainer>
          <Recipe foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default FoodApp;
