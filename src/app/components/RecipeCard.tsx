import Image from "next/image";
import { IRecipe } from "../types/recipe";
import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import { useRecipeStore } from "../store/store";
import { updateFavorite } from "../services/recipes";

const RecipeCard = ({ recipes }: { recipes: IRecipe[] }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  const handleReadMore = (recipe: IRecipe) => {
    setSelectedRecipe(recipe);
  };

  const handleToggleFavorite = async (id: string) => {
    const response = await updateFavorite(id);
    toggleFavorite(response._id!);
    const updatedRecipes = useRecipeStore.getState().recipes;
    setRecipes([...updatedRecipes]);
    console.log("finish to toggle favorite");
  };

  const handleCloseDialog = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {recipes.map((recipe: IRecipe) => (
          <div
            key={recipe._id}
            className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm mx-auto mb-6 hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            {/* תמונה ראשית */}
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={200} // או כל רוחב שתבחר
              height={200} // או כל גובה שתבחר
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              {/* שם המנה */}
              <h2 className="text-3xl font-extrabold text-gray-800 mb-3 tracking-wide">
                {recipe.name}
              </h2>

              {/* קטגוריית המנה */}
              <p className="text-sm text-orange-600 font-semibold">
                {recipe.category}
              </p>

              {/* תקציר הוראות הכנה עם הגבלה של 100 תווים */}
              <p className="text-sm text-gray-700 mt-2">
                {Array.isArray(recipe.instructions)
                  ? recipe.instructions.join(" ").substring(0, 100) + "..."
                  : recipe.instructions}
              </p>
              <div className="flex justify-between items-center mt-6">
                {/* כפתור קרא עוד */}
                <button
                  onClick={() => handleReadMore(recipe)}
                  className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200 transform hover:scale-105"
                >
                  read more
                </button>

                <button
                  onClick={() => handleToggleFavorite(recipe._id!)}
                  className={`text-3xl focus:outline-none transition duration-200 ${
                    recipe.isFavorite
                      ? "text-yellow-400 hover:text-yellow-600"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                >
                  ★
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* פופאפ/מגירה עם פרטי המתכון המלאים */}
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={handleCloseDialog} />
      )}
    </div>
  );
};

export default RecipeCard;
