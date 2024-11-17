import { IRecipe } from "../types/recipe";
import React from "react";

const RecipeCard = ({ recipes }: { recipes: IRecipe[] }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
      {recipes.map((recipe: IRecipe) => (
        <div
          key={recipe.name}
          className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm mx-auto mb-6 hover:shadow-2xl transform hover:scale-105 transition duration-300"
        >
          {/* <>{recipe}</> */}

          {/* כאן אפשר להוסיף תמונה אם יש */}
          {/* <Image src={recipe.image} width={200} height={200} alt={recipe.name} className="w-full h-48 object-cover" /> */}
          <div className="p-6">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-3 tracking-wide">
              {recipe.name}
            </h2>

            <p className="text-sm text-orange-600 font-semibold">
              {recipe.category}
            </p>

            <p className="text-sm text-gray-700 mt-2">
              {recipe.ingredients.join(", ")}
            </p>

            <div className="flex justify-between items-center mt-6">
              <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200 transform hover:scale-105">
                read more
              </button>
              <button className="text-yellow-400 text-2xl hover:text-yellow-500 focus:outline-none transition duration-200">
                ★
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
