"use client";
import React, { useEffect } from "react";
import { getRecipes } from "@/app/services/recipes";
import RecipeCard from "@/app/components/RecipeCard";
// import { IRecipe } from "@/app/types/recipe";
import { useRecipeStore } from "@/app/store/store";

const Page = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const loaded = useRecipeStore((state) => state.loaded);

  useEffect(() => {
    const fetchData = async () => {
      if (!loaded) {
        try {
          const response = await getRecipes();
          setRecipes(response);
        } catch (error) {
          console.error("Failed to fetch recipes:", error);
        }
      }
    };
    fetchData();
  }, [loaded, setRecipes]);

  return (
    <div>
      <RecipeCard recipes={recipes} />
    </div>
  );
};

export default Page;
