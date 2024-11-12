import Image from 'next/image';
import { IRecipe } from '../types/recipe';

import React from 'react';

const RecipeCard = ({ recipes }:{recipes:IRecipe[]}) => {

return (
    <>
      {recipes.map((recipe: IRecipe) => (
        <div className="bg-white shadow-md rounded-lg overflow-hidden" key={recipe.name}>
          <Image src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{recipe.name}</h2>
            <p className="text-gray-700">{recipe.category}</p>
            <p className="text-gray-600">{recipe.ingredients}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">קרא עוד</button>
              <button className="text-yellow-500">★</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
  
};

export default RecipeCard;