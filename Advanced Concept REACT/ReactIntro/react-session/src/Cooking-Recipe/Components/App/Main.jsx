import React, { useContext, useState } from "react";
import RecipeList from "../RecipeList/RecipeList";
import "../../Css/Main.css";

export const RecipeContext = React.createContext();

function Main() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const context = {
    handleRecipeDelete,
    handleRecipeAdd,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: Date.now().toString(),
      name: "New",
      servings: 1,
      cookingTime: "1:00",
      instruction: "Instr.",
      ingredients: [
        {
          id: Date.now().toString(),
          name: "Name",
          amount: "1Tbs",
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipes) => recipes.id !== id));
  }
  return (
    <RecipeContext.Provider value={context}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookingTime: "1:45",
    instruction:
      "1. Put Salt on Chicken\n2. Put Chicken in Fry\n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "2 Kg",
      },
      {
        id: 2,
        name: "Salt",
        amount: "3 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Mutton",
    servings: 2,
    cookingTime: "20:45",
    instruction: "1. Put Salt on Mutton\n2. Put Mutton in Fry\n3. Eat Mutton",
    ingredients: [
      {
        id: 1,
        name: "Mutton",
        amount: "2 Kg",
      },
      {
        id: 2,
        name: "Salt",
        amount: "2 Tbs",
      },
    ],
  },
];
export default Main;
