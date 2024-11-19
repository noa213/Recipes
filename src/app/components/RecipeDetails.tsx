import { IRecipe } from "../types/recipe";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRecipeStore } from "../store/store";
import { updateFavorite } from "../services/recipes";

const RecipeDetails = ({
  recipe,
  onClose,
}: {
  recipe: IRecipe;
  onClose: () => void;
}) => {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    setIsFavorite(recipe.isFavorite);
  }, [recipe]);

  const handleToggleFavorite = async () => {
    const response = await updateFavorite(recipe._id!);
    toggleFavorite(response._id!);
    setIsFavorite(!isFavorite);
    const updatedRecipes = useRecipeStore.getState().recipes;
    setRecipes([...updatedRecipes]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg p-6 max-w-lg w-full relative overflow-y-auto"
        style={{ maxHeight: "90vh" }}
      >
        {recipe.image && (
          <div className="mb-4">
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        )}

        <h2 className="text-3xl font-bold text-gray-800 mb-4">{recipe.name}</h2>

        <p className="text-orange-600 font-semibold mb-2">{recipe.category}</p>

        <p className="text-gray-700 font-semibold mb-2">Ingredients:</p>
        <ul className="list-disc pl-5 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>

        <p className="text-gray-700 font-semibold mb-2">Instructions:</p>
        <div className="text-gray-700 mb-4">
          {recipe.instructions.map((step, index) => (
            <p key={index} className="mb-2">
              {step}
            </p>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleToggleFavorite}
            className={`text-3xl focus:outline-none transition duration-200 ${
              isFavorite
                ? "text-yellow-400 hover:text-yellow-600"
                : "text-gray-400 hover:text-yellow-400"
            }`}
          >
            ★
          </button>

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
