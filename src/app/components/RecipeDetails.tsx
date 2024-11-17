import { IRecipe } from "../types/recipe";
import React from "react";

const RecipeDetails = ({
  recipe,
  onClose,
}: {
  recipe: IRecipe;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{recipe.name}</h2>
        <p className="text-orange-600 font-semibold mb-2">
          Category: {recipe.category}
        </p>
        <p className="text-gray-700 mb-4">Ingredients:</p>
        <ul className="list-disc pl-5 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
        {/* <p className="text-gray-600">{recipe.description}</p> */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
