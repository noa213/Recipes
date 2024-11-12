import React from 'react'
import { IRecipe } from '../types/recipe';
import Image from 'next/image';


const RecipeCard = ({ recipe }:{recipe:IRecipe}) => {
    return (
        <div className="recipe-card">
          <Image src={recipe.image} width={100} height={100} alt={recipe.name} />
          <h3>{recipe.name}</h3>
          <p><strong>קטגוריה:</strong> {recipe.category}</p>
          {/* <p>{recipe.description}</p> */}
          <button>קרא עוד</button>
          <button>★</button>
        </div>
      );}

export default RecipeCard