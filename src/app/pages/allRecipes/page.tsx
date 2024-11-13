"use client";
import React, { useEffect, useState } from "react";
import { getRecipes } from "@/app/services/recipes";
import RecipeCard from "@/app/components/RecipeCard";
import { IRecipe } from "@/app/types/recipe";

const Page = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecipes();
      setRecipes(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <>{recipes.map((recipe) => console.log(recipe))}</>
      <RecipeCard recipes={recipes} />
    </div>
  );
};

export default Page;
