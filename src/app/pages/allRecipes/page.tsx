"use client";
import React, { useEffect, useState } from "react";
import { getRecipes } from "@/app/services/recipes";
import RecipeCard from "@/app/components/RecipeCard";
// import { IRecipe } from "@/app/types/recipe";
import { useRecipeStore } from "@/app/store/store";

const Page = () => {
  // const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const loaded = useRecipeStore((state) => state.loaded);
  const setLoaded = useRecipeStore((state) => state.setLoaded);
  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await getRecipes();
    //   setRecipes(response);
    const fetchData = async () => {
      try {
        const response = await getRecipes();
        // response.forEach((recipe) => addRecipe(recipe)); // הוספת כל מתכון ל-store
        setLoaded(true);
      } catch (error) {
        console.error("Failed to load recipes:", error);
      }
    };

    if (!loaded) fetchData();
  }, [addRecipe, recipes.length]);

  return (
    <div>
      <>{recipes.map((recipe) => console.log(recipe))}</>
      <RecipeCard recipes={recipes} />
    </div>
  );
};

export default Page;
