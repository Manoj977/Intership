import React from "react";
import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients }) => {
  const ingredientElements = ingredients.map((ingredients) => {
    return <Ingredient key={ingredients.id} {...ingredients} />;
  });
  return <div className="ingredient-grid">{ingredientElements}</div>;
};

export default IngredientList;
