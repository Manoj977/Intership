import React, { useContext } from "react";
import { RecipeContext } from "../App/Main";
import Recipe from "../Recipe/Recipe";

const RecipeList = ({ recipes }) => {
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipes) => {
          return <Recipe key={recipes.id} {...recipes} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Receipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
