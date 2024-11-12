// import React from 'react'
// import { IRecipe } from '../types/recipe';
// // import Image from 'next/image';


// const RecipeCard = ({ recipe }:{recipe:IRecipe}) => {
//     return (
//         <div className="recipe-card">
//           {/* <Image src={recipe.image} width={100} height={100} alt={recipe.name} /> */}
//           <h3>{recipe.name}</h3>
//           <p><strong>קטגוריה:</strong> {recipe.category}</p>
//           {/* <p>{recipe.description}</p> */}
//           <button>קרא עוד</button>
//           <button>★</button>
//         </div>
//       );}

// export default RecipeCard


// import Image from 'next/image';
import { IRecipe } from '../types/recipe';

import React from 'react';

const RecipeCard = ({ recipe }:{recipe:IRecipe}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* <Image src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" /> */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{recipe.name}</h2>
        <p className="text-gray-700">{recipe.category}</p>
        {/* <p className="text-gray-600">{recipe.description}</p> */}
        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">קרא עוד</button>
          <button className="text-yellow-500">★</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;