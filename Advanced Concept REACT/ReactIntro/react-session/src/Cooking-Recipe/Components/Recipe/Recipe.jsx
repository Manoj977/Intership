import React from "react";
import IngredientList from "../Ingredient/IngredientList";
const Recipe = (props) => {
  const {
    id, 
    name,
    servings,
    cookingTime,
    instruction,
    ingredients,
    handleRecipeDelete,
  } = props;

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time: </span>
        <span className="recipe__value">{cookingTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings: </span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instruction recipe__value--indented">
          {instruction}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value  recipe__value--indented">
          <IngredientList ingredients={ingredients}></IngredientList>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
